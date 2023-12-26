create policy "Give access to a file to user qt2lnz_0"
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'article-images'::text));


create policy "Give access to a file to user qt2lnz_1"
on "storage"."objects"
as permissive
for insert
to public
with check ((bucket_id = 'article-images'::text));


create policy "Give access to a file to user qt2lnz_2"
on "storage"."objects"
as permissive
for delete
to public
using ((bucket_id = 'article-images'::text));


create policy "Give access to a file to user qt2lnz_3"
on "storage"."objects"
as permissive
for update
to public
using ((bucket_id = 'article-images'::text));



