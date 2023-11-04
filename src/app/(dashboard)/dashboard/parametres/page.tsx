import { UpdateUser } from "$/components/forms"
import { Heading, Paragraph } from "$/components/ui"
import {auth} from "$/lib/auth"
import { getUser } from "$/server/users"

const SettingsPage = async () => {

    const user = await auth()



    const userInfos = await getUser(user?.user.id)
    console.log(userInfos)
    return (
    <main>
        <Heading>Paramètres</Heading>
        <Paragraph>
            Mettez à jour vos informations personnelles.
        </Paragraph>
        <Paragraph variant="hightlight">
            {userInfos?.username === null ?
             "Votre nom d'utilisateur n'est pas encore défini. Il sera utilisé pour votre profil public. Vous pouvez le changer à tout moment." : null}
        </Paragraph>
        <UpdateUser userId={user?.user.id}/>
    </main>
    )
}

export default SettingsPage