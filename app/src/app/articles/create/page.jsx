
'use client'
import { useUser } from '../../../components/UserContext'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ArticleForm from '../../../components/Form/Article';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function CreateArticlePage() {

  const { user } = useUser()
  const supabase = createClientComponentClient()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // Si no hay usuario autenticado, redirigir a la página de inicio de sesión
      router.push('/login');
    }
  }, [user, router]);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
   
    const author_id = user?.id

    try {
       
      let image_url = '';
      if (formData.image) {
        const fileExt = formData.image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: image ,error: uploadError } = await supabase.storage
          .from('article-images') 
          .upload(fileName, formData.image)
        const {fullPath} = image
        if (uploadError) {
          throw new Error('Error to upload image');
        }
  
         const {data} = await supabase.storage.from('article-images').getPublicUrl(fileName)
         image_url = data.publicUrl
      }
  

      const { data, error } = await supabase.from('articles').insert(
        { 
          title: formData.title, 
          content: formData.content, 
          category: formData.category, 
          image_url,  
          author_id 
        }
      ).select();

  
      if (error) throw error;
  
      const newArticleId = data[0].id;
      router.push(`/articles/${newArticleId}`);
    } catch (error) {
      console.error('Error to create article:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create a new article</h1>
      <div className="max-w-md mx-auto">
        <ArticleForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
}