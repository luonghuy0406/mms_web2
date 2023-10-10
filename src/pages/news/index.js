import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import News from '@/sections/news/news';
import useTrans from '@/hooks/useTrans';


const Page = ({products, posts}) => {
  const trans = useTrans()
  return (
    <>
      <Head>
        <title>
        {trans['News and Event']} | MEKONG MARINE SUPPLY CO., LTD
        </title>
      </Head>
      <News name={trans['News and Event']} path='news' posts={posts}/>
    </>
  )
};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

Page.getInitialProps = async (ctx) => {
  // const res = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/product/list')
  // const json = await res.json()
  // const resPosts = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/post/list')
  // const jsonPosts = await resPosts.json()
  
  // const resFooter = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/webinf/list')
  // const jsonFooter = await resFooter.json()
  const json = {
    "results": [
        {
            "id_product": 1,
            "name": "Durasin",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-18T17:00:00.000Z",
            "edit_date": "2023-10-01T17:00:00.000Z",
            "image": "app%2Fstorage%2F1696218230676durasinv.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 2,
            "name": "KVM Sealing Compound",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Frw.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 3,
            "name": "Mangana ",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 4,
            "name": "Fire Stop ",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2F2product.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 5,
            "name": "Bos Oily Waterseparator ",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 2,
            "status": 1
        },
        {
            "id_product": 6,
            "name": "Sewage Treament(WASTEWATER EQUIPMENT",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fdurasinv.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 2,
            "status": 1
        },
        {
            "id_product": 7,
            "name": "Water Maker RO",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2F2product.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 2,
            "status": 1
        },
        {
            "id_product": 8,
            "name": "Viega Marine Systems",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 9,
            "name": "Viega Seapress",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-21T17:00:00.000Z",
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 10,
            "name": "Viega Easytop",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-21T17:00:00.000Z",
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 11,
            "name": "Viega Raxofix",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-25T17:00:00.000Z",
            "image": "app%2Fstorage%2F2product.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 12,
            "name": "Viega Press Systems",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-25T17:00:00.000Z",
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 13,
            "name": "Viton/FKM rubber packing sheet\n",
            "des": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.\\nDURASIN được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.\\nDURASIN với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.\\nDURASIN là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.\\nXuất xứ: hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)\"",
            "spec": null,
            "des_en": null,
            "spec_en": null,
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-17T17:00:00.000Z",
            "image": "app%2Fstorage%2Frw.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 4,
            "status": 1
        }
    ]
  }
  const jsonPosts = {
    "results": [
        {
            "id_post": 1,
            "name": "hihi",
            "name_en": "Quân Trứng",
            "content": "ddffkjgm",
            "content_en": null,
            "image": "%2Fapp%2Fstorage%2F1696012832477110eư.png",
            "cre_date": "2023-08-29T17:00:00.000Z",
            "author": "h",
            "id_user": "admin"
        },
        {
            "id_post": 2,
            "name": "HEPCO triển khai thí điểm thu gom rác thải sinh hoạt bằng xe điện",
            "name_en": "HEPCO triển khai thí điểm thu gom rác thải sinh hoạt bằng xe điện",
            "content": "<p>Kết th&uacute;c đợt 1 của c&ocirc;ng t&aacute;c ph&aacute;t tờ gấp tuy&ecirc;n truyền &ldquo;N&acirc;ng cao &yacute; thức của người d&acirc;n về bảo vệ m&ocirc;i trường&rdquo; triển khai tại 10 Phường trung t&acirc;m th&agrave;nh phố Huế, những ng&agrave;y đầu th&aacute;ng 4 vừa qua HEPCO tiếp tục triển khai c&ocirc;ng t&aacute;c tuy&ecirc;n truyền tại 17/27 Phường c&ograve;n lại dự kiến kết th&uacute;c v&agrave; 25/4/2021.</p>\\n\\n<p>Tờ gấp tuy&ecirc;n truyền bao h&agrave;m c&aacute;c nội dung về N&Acirc;NG CAO NHẬN THỨC CHẤP H&Agrave;NH QUY ĐỊNH VỀ VỆ SINH M&Ocirc;I TRƯỜNG, LAN TỎA TINH THẦN NG&Agrave;Y CHỦ NHẬT XANH, C&Aacute;CH THỨC PH&Acirc;N LOẠI R&Aacute;C TẠI NGUỒN, C&Aacute;CH XẢ THẢI ĐỐI VỚI C&Aacute;C LOẠI R&Aacute;C CỒNG KỀNH, R&Aacute;C X&Acirc;Y DỰNG, MỨC THU TIỀN DỊCH VỤ THU GOM VẬN CHUYỂN R&Aacute;C THẢI SINH HOẠT V&Agrave; GIỚI THIỆU H&Igrave;NH THỨC THANH TO&Aacute;N QUA APP được c&aacute;c tuy&ecirc;n truyền vi&ecirc;n của HEPCO phối hợp với lực lượng c&aacute;n bộ địa phương triển khai trao tận tay đến tận tay c&aacute;c hộ d&acirc;n, cơ quan, đơn vị tr&ecirc;n địa b&agrave;n th&agrave;nh phố Huế.</p>\\n\\n<p>B&ecirc;n cạnh việc mong muốn truyền tải được c&aacute;c th&ocirc;ng tin hữu &iacute;ch đến với mọi người d&acirc;n, c&aacute;c th&agrave;nh vi&ecirc;n tổ tuy&ecirc;n truyền c&ograve;n mong muốn mọi người d&acirc;n tiếp nhận, sử dụng v&agrave; lưu trữ tờ gấp một c&aacute;ch văn minh để ph&aacute;t huy được hết &yacute; nghĩa của c&ocirc;ng t&aacute;c tuy&ecirc;n truyền.</p>\\n\\n<p>Một số h&igrave;nh ảnh về buổi ph&aacute;t tờ gấp:</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:486px; width:621px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\">&nbsp;</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:342px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:347px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:366px; width:512px\\\" /></p>\\n\",",
            "content_en": "<p>Kết th&uacute;c đợt 1 của c&ocirc;ng t&aacute;c ph&aacute;t tờ gấp tuy&ecirc;n truyền &ldquo;N&acirc;ng cao &yacute; thức của người d&acirc;n về bảo vệ m&ocirc;i trường&rdquo; triển khai tại 10 Phường trung t&acirc;m th&agrave;nh phố Huế, những ng&agrave;y đầu th&aacute;ng 4 vừa qua HEPCO tiếp tục triển khai c&ocirc;ng t&aacute;c tuy&ecirc;n truyền tại 17/27 Phường c&ograve;n lại dự kiến kết th&uacute;c v&agrave; 25/4/2021.</p>\\n\\n<p>Tờ gấp tuy&ecirc;n truyền bao h&agrave;m c&aacute;c nội dung về N&Acirc;NG CAO NHẬN THỨC CHẤP H&Agrave;NH QUY ĐỊNH VỀ VỆ SINH M&Ocirc;I TRƯỜNG, LAN TỎA TINH THẦN NG&Agrave;Y CHỦ NHẬT XANH, C&Aacute;CH THỨC PH&Acirc;N LOẠI R&Aacute;C TẠI NGUỒN, C&Aacute;CH XẢ THẢI ĐỐI VỚI C&Aacute;C LOẠI R&Aacute;C CỒNG KỀNH, R&Aacute;C X&Acirc;Y DỰNG, MỨC THU TIỀN DỊCH VỤ THU GOM VẬN CHUYỂN R&Aacute;C THẢI SINH HOẠT V&Agrave; GIỚI THIỆU H&Igrave;NH THỨC THANH TO&Aacute;N QUA APP được c&aacute;c tuy&ecirc;n truyền vi&ecirc;n của HEPCO phối hợp với lực lượng c&aacute;n bộ địa phương triển khai trao tận tay đến tận tay c&aacute;c hộ d&acirc;n, cơ quan, đơn vị tr&ecirc;n địa b&agrave;n th&agrave;nh phố Huế.</p>\\n\\n<p>B&ecirc;n cạnh việc mong muốn truyền tải được c&aacute;c th&ocirc;ng tin hữu &iacute;ch đến với mọi người d&acirc;n, c&aacute;c th&agrave;nh vi&ecirc;n tổ tuy&ecirc;n truyền c&ograve;n mong muốn mọi người d&acirc;n tiếp nhận, sử dụng v&agrave; lưu trữ tờ gấp một c&aacute;ch văn minh để ph&aacute;t huy được hết &yacute; nghĩa của c&ocirc;ng t&aacute;c tuy&ecirc;n truyền.</p>\\n\\n<p>Một số h&igrave;nh ảnh về buổi ph&aacute;t tờ gấp:</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:486px; width:621px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\">&nbsp;</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:342px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:347px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:366px; width:512px\\\" /></p>\\n\",",
            "image": "%2Fapp%2Fstorage%2F1696012832477110eư.png",
            "cre_date": "2023-09-29T17:00:00.000Z",
            "author": "Anh Mai",
            "id_user": "admin"
        }
    ]
}
const jsonFooter = {
  "results": [
      {
          "id": "head_office",
          "adress": "Tầng 1, 16 Yên Thế, Phường 2,\nQuận Tân Bình, HCMC, Việt Nam.",
          "adress_en": "1st Floor, 16 Yen The St, Ward 2,\nTan Binh Dist., HCMC, Viet Nam.",
          "phone_num": "+84 0123456789",
          "email": "inquiries@mmsvn.com\n",
          "link1": "facebook.com",
          "link2": "youtube.com",
          "link3": "https://www.linkedin.com/"
      },
      {
          "id": "vt_office",
          "adress": "D1-2/8 Khu đô thị Chí Linh,\nThành phố Vũng Tàu, Việt Nam.",
          "adress_en": "D1-2/8 Chi Linh Urban Area,\nVung Tau City, Viet Nam.",
          "phone_num": "+84 09876543210",
          "email": null,
          "link1": null,
          "link2": null,
          "link3": null
      }
  ]
}
  return { products: json.results, posts : jsonPosts.results, footerDetail: jsonFooter.results }
}
export default Page;
