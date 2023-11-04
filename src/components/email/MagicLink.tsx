import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@jsx-email/all';

import * as React from 'react';
import { z } from 'zod';

export const TemplateName = 'MagicLink';

export const TemplateStruct = z.object({
  linkUrl: z.string(),
});

export type TemplateProps = z.infer<typeof TemplateStruct>;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  padding: '20px 0 48px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#777',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#777',
};

const button = {
  backgroundColor: '#121212',
  borderRadius: '0.3125rem',
  color: '#fff',
  display: 'block',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  padding: '10px',
};

export const Template = ({
  linkUrl = 'https://localhost:3000/hahaha',
}: TemplateProps) => (
  <Html>
    <Head />
    <Preview>Clique sur le lien pour te connecter</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={paragraph}>
            <Link style={anchor} href='https://localhost:3000'>
              Keeply
            </Link>
          </Text>
          <Text style={paragraph}>
            Hey, tu as demandé à te connecter sur{' '}
            <Link style={anchor} href='https://localhost:3000'>
              Keeply
            </Link>
            . Il te suffit de cliquer sur le bouton ci-dessous pour te
            connecter.
          </Text>
          <Button style={button} href={linkUrl}>
            Me connecter
          </Button>
          <Text style={paragraph}>
            Si le bouton ne fonctionne pas, copie-colle le lien suivant dans ton
            navigateur : {linkUrl}
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            Si tu n&apos;as pas demandé à te connecter, tu peux ignorer cet email.
          </Text>
          <Text style={paragraph}>
            À bientôt sur{' '}
            <Link style={anchor} href='https://localhost:3000'>
              Keeply
            </Link>{' '}
            !
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
