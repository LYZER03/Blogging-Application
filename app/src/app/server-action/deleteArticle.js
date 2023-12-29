'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function deleteArticle(req, res) {
    const formData = new URLSearchParams(req.body);
    const articleId = formData.get('id');

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user

    if (!user){
        console.error('User is not authenticated within deleteArticle server action')
        return res.status(401).json({message: 'Unauthorized'});
    }

    const {error} = await supabase
        .from('articles')
        .delete()
        .match({id: articleId, user_id: user.id})

    if (error){
        console.error('Error deleting data', error)
        return res.status(500).json({message: 'Error deleting data'});
    }

    revalidatePath('/articles')

    return res.status(200).json({message: 'Success'});
}