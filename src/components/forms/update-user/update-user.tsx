"use client"
import styles from "./update-user.module.css";
import { Button, Input, TextArea } from "$/components/ui";
import { useQuery } from "@tanstack/react-query";
import { checkUsername, updateProfil } from "$/lib/fetchs";
import {upddateUsernameSchema} from "$/schemas/users-schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod"
import { useDebounce } from 'use-debounce';
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type FormValue = z.infer<typeof upddateUsernameSchema>


export const UpdateUser = ({userId}:{userId:string}) => {

    const {handleSubmit, watch, register} = useForm<FormValue>({
        resolver: zodResolver(upddateUsernameSchema)
    })

    const [username] = useDebounce(watch("username"), 1000) 

    const {data, isLoading} = useQuery({
        queryKey: ["check-username", username],
        queryFn: () => checkUsername(username as string),
        enabled: username !== undefined
    });

    const {mutate, isPending, isSuccess } = useMutation({
        mutationFn: (data: FormValue) => updateProfil(data),
        onSuccess: () => {
            console.log("success")
            toast.success("Votre profil a été mis à jour")
        },
        
    })

    const onSubmit = (data: FormValue) => {
        const datas= {
            ...data,
            userId: userId
        }
        mutate(datas)
    }

    return (
        <section className={styles.form__container}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                <Input 
                label="Nom d'utilisateur" 
                placeholder="Nom d'utilisateur" 
                id="username"
                {...register("username")}
                />
                {isLoading ? <p className={styles.username_status}>Vérification en cours...</p> : (
                <p className={styles.username_status}>{data?.data?.message}</p>

                )}
                </div>
                <TextArea
                label="Bio"
                placeholder="Bio"
                id="bio"
                rows={5}
                {...register("description")}
                />
                <Button type="submit" 
                disabled={isPending}
                aria-disabled={isPending}
                >
                {isPending ? "Mise à jour du profil..." : "Mettre à jour le profil"}
                </Button>
            </form>
        </section>
    )
}
