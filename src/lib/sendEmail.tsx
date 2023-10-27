import { render } from '@jsx-email/render';
import { createTransport } from "nodemailer"

import { Template } from "$/components/email/MagicLink";

export async function sendVerificationRequest(params:any) {
  const { identifier, url, provider } = params
  const { host } = new URL(url)
  const emailHtml = render(<Template linkUrl={url}/>);
  const transport = createTransport(provider.server)
  await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Demande de connexion à ${host}`,
    text: url,
    html: emailHtml,
  })
}

