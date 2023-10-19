import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';
import { convertPath } from '@/layouts/main/top-nav';


const Page = ({products,subProducts}) => {
    const router = useRouter    ();
    const { slug } = router.query;
    const product = products.filter((product) => {return `${convertPath(product.name)}-${product.id_product}` == slug})
    
    const sub = subProducts.filter((p) => {return product[0]?.id_product == p.id_product})
    return(
        <>
            <Head>
            <title>
            {product[0].name} | MEKONG MARINE SUPPLY CO., LTD
            </title>
            </Head>
            <Product parentPath={'/viton_fkm_rubber_packing_sheet'} parentName='Viton/FKM Rubber packing sheet' product={product} subProducts={sub}/>
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
  // const res2 = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/sub/list')
  // const json2 = await res2.json()
  
  // const resFooter = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/webinf/list')
  // const jsonFooter = await resFooter.json()
  const json = {
    "results": [
        {
            "id_product": 1,
            "name": "Durasin",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "name": "Sewage Treament (WASTEWATER EQUIPMENT)",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
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
  const json2= {
    "results": [
        {
            "id_sub": 1,
            "name": "BOSS_2.2T-107__86519",
            "name_en": null,
            "content": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành",
            "content_en": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành",
            "image": "app%2Fstorage%2Frw.jpg",
            "cre_date": "2023-09-27T17:00:00.000Z",
            "id_user": "admin",
            "id_product": 5
        },
        {
            "id_sub": 2,
            "name": "BOSS_2.2T-107Y__24416",
            "name_en": "BOSS_2.2T-107Y__24416",
            "content": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành",
            "content_en": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hànhffg",
            "image": "app%2Fstorage%2Frw.jpg",
            "cre_date": "2023-09-27T17:00:00.000Z",
            "id_user": "admin",
            "id_product": 5
        },
        {
            "id_sub": 3,
            "name": "BOSS_5T-107__22784\n",
            "name_en": "BOSS_5T-107__22784",
            "content": "Keo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành",
            "content_en": "BOSS_5TKeo đổ căn DURASIN là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành-107__22784",
            "image": "app%2Fstorage%2Frw.jpg",
            "cre_date": "2023-09-27T17:00:00.000Z",
            "id_user": "admin",
            "id_product": 5
        },
        {
            "id_sub": 4,
            "name": "Profipress EN 1057",
            "name_en": "Profipress EN 1057",
            "content": "Profipress EN 1057",
            "content_en": "Profipress EN 1057",
            "image": "app%2Fstorage%2Frw.jpg",
            "cre_date": "2023-09-27T17:00:00.000Z",
            "id_user": "admin",
            "id_product": 8
        },
        {
            "id_sub": 5,
            "name": "Silicon bronze with multi-layer pipe Raxofix 16-63 mm\n",
            "name_en": "Silicon bronze with multi-layer pipe Raxofix 16-63 mm",
            "content": "Silicon bronze with multi-layer pipe Raxofix 16-63 mm",
            "content_en": "Silicon bronze with multi-layer pipe Raxofix 16-63 mm",
            "image": "app%2Fstorage%2Frw.jpg",
            "cre_date": "2023-09-27T17:00:00.000Z",
            "id_user": "admin",
            "id_product": 9
        }
    ]
}
const jsonFooter = {
  "results": [
      {
          "id": "head_office",
          "adress": "Tầng 1, 16 Yên Thế, Phường 2, Quận Tân Bình, HCMC, Việt Nam.",
          "adress_en": "1st Floor, 16 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam.",
          "phone_num": "+84 0123456789",
          "email": "inquiries@mmsvn.com",
          "link1": "facebook.com",
          "link2": "youtube.com",
          "link3": "https://www.linkedin.com/"
      },
      {
          "id": "vt_office",
          "adress": "D1-2/8 Khu đô thị Chí Linh, Thành phố Vũng Tàu, Việt Nam.",
          "adress_en": "D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam.",
          "phone_num": "+84 09876543210",
          "email": null,
          "link1": null,
          "link2": null,
          "link3": null
      }
  ]
}
  return { products: json.results, subProducts: json2.results ,footerDetail : jsonFooter.results }
}

export default Page;
