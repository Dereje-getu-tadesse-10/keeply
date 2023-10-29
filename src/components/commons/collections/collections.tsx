import { Collection } from "@prisma/client"
import { Badge, Button, ButtonLink, Card, Heading, Paragraph } from "$/components/ui"

export const Collections = ({ collections }: { collections: Partial<Collection>[] }) => {
    return (
        <>
            {collections.length > 0 ?
                <section>
                    {collections.map((collection) => (
                        <Card key={collection.id}>
                            <Heading as='h3' variant='h3'>
                                {collection.name}
                            </Heading>
                            <Paragraph variant='hightlight'>
                                {collection.description}
                            </Paragraph>
                            <Badge intent={collection.status ? 'primary' : 'secondary'}>
                                {collection.status ? 'Public' : 'Privée'}
                            </Badge>
                            <ButtonLink href={`/dashboard/collection/${collection.id}`} size={'small'}>
                                Voir la collection
                            </ButtonLink>
                        </Card>
                    ))}
                </section> : (
                    <div>
                        <Heading as='h3' variant='h3'>
                            Mince ! On dirait bien que vous n'avez pas encore de collection.
                        </Heading>
                        <Button size={"medium"}>
                            Créer une collection
                        </Button>
                    </div>
                )
            }
        </>
    )
}