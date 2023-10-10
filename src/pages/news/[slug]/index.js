import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/context';
import { convertPath } from '@/layouts/main/top-nav';

const useStyles = makeStyles(() => {
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    }
  };
});
const Page = () => {
  const posts = [
    {
        "id_post": 1,
        "name": "HEPCO triển khai thí điểm thu gom rác thải sinh hoạt bằng xe điện",
        "name_en": "HEPCO triển khai thí điểm thu gom rác thải sinh hoạt bằng xe điện",
        "content": "<p>Kết th&uacute;c đợt 1 của c&ocirc;ng t&aacute;c ph&aacute;t tờ gấp tuy&ecirc;n truyền &ldquo;N&acirc;ng cao &yacute; thức của người d&acirc;n về bảo vệ m&ocirc;i trường&rdquo; triển khai tại 10 Phường trung t&acirc;m th&agrave;nh phố Huế, những ng&agrave;y đầu th&aacute;ng 4 vừa qua HEPCO tiếp tục triển khai c&ocirc;ng t&aacute;c tuy&ecirc;n truyền tại 17/27 Phường c&ograve;n lại dự kiến kết th&uacute;c v&agrave; 25/4/2021.</p>\\n\\n<p>Tờ gấp tuy&ecirc;n truyền bao h&agrave;m c&aacute;c nội dung về N&Acirc;NG CAO NHẬN THỨC CHẤP H&Agrave;NH QUY ĐỊNH VỀ VỆ SINH M&Ocirc;I TRƯỜNG, LAN TỎA TINH THẦN NG&Agrave;Y CHỦ NHẬT XANH, C&Aacute;CH THỨC PH&Acirc;N LOẠI R&Aacute;C TẠI NGUỒN, C&Aacute;CH XẢ THẢI ĐỐI VỚI C&Aacute;C LOẠI R&Aacute;C CỒNG KỀNH, R&Aacute;C X&Acirc;Y DỰNG, MỨC THU TIỀN DỊCH VỤ THU GOM VẬN CHUYỂN R&Aacute;C THẢI SINH HOẠT V&Agrave; GIỚI THIỆU H&Igrave;NH THỨC THANH TO&Aacute;N QUA APP được c&aacute;c tuy&ecirc;n truyền vi&ecirc;n của HEPCO phối hợp với lực lượng c&aacute;n bộ địa phương triển khai trao tận tay đến tận tay c&aacute;c hộ d&acirc;n, cơ quan, đơn vị tr&ecirc;n địa b&agrave;n th&agrave;nh phố Huế.</p>\\n\\n<p>B&ecirc;n cạnh việc mong muốn truyền tải được c&aacute;c th&ocirc;ng tin hữu &iacute;ch đến với mọi người d&acirc;n, c&aacute;c th&agrave;nh vi&ecirc;n tổ tuy&ecirc;n truyền c&ograve;n mong muốn mọi người d&acirc;n tiếp nhận, sử dụng v&agrave; lưu trữ tờ gấp một c&aacute;ch văn minh để ph&aacute;t huy được hết &yacute; nghĩa của c&ocirc;ng t&aacute;c tuy&ecirc;n truyền.</p>\\n\\n<p>Một số h&igrave;nh ảnh về buổi ph&aacute;t tờ gấp:</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:486px; width:621px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\">&nbsp;</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:342px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:347px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:366px; width:512px\\\" /></p>\\n\",",
        "content_en": "<p>Kết th&uacute;c đợt 1 của c&ocirc;ng t&aacute;c ph&aacute;t tờ gấp tuy&ecirc;n truyền &ldquo;N&acirc;ng cao &yacute; thức của người d&acirc;n về bảo vệ m&ocirc;i trường&rdquo; triển khai tại 10 Phường trung t&acirc;m th&agrave;nh phố Huế, những ng&agrave;y đầu th&aacute;ng 4 vừa qua HEPCO tiếp tục triển khai c&ocirc;ng t&aacute;c tuy&ecirc;n truyền tại 17/27 Phường c&ograve;n lại dự kiến kết th&uacute;c v&agrave; 25/4/2021.</p>\\n\\n<p>Tờ gấp tuy&ecirc;n truyền bao h&agrave;m c&aacute;c nội dung về N&Acirc;NG CAO NHẬN THỨC CHẤP H&Agrave;NH QUY ĐỊNH VỀ VỆ SINH M&Ocirc;I TRƯỜNG, LAN TỎA TINH THẦN NG&Agrave;Y CHỦ NHẬT XANH, C&Aacute;CH THỨC PH&Acirc;N LOẠI R&Aacute;C TẠI NGUỒN, C&Aacute;CH XẢ THẢI ĐỐI VỚI C&Aacute;C LOẠI R&Aacute;C CỒNG KỀNH, R&Aacute;C X&Acirc;Y DỰNG, MỨC THU TIỀN DỊCH VỤ THU GOM VẬN CHUYỂN R&Aacute;C THẢI SINH HOẠT V&Agrave; GIỚI THIỆU H&Igrave;NH THỨC THANH TO&Aacute;N QUA APP được c&aacute;c tuy&ecirc;n truyền vi&ecirc;n của HEPCO phối hợp với lực lượng c&aacute;n bộ địa phương triển khai trao tận tay đến tận tay c&aacute;c hộ d&acirc;n, cơ quan, đơn vị tr&ecirc;n địa b&agrave;n th&agrave;nh phố Huế.</p>\\n\\n<p>B&ecirc;n cạnh việc mong muốn truyền tải được c&aacute;c th&ocirc;ng tin hữu &iacute;ch đến với mọi người d&acirc;n, c&aacute;c th&agrave;nh vi&ecirc;n tổ tuy&ecirc;n truyền c&ograve;n mong muốn mọi người d&acirc;n tiếp nhận, sử dụng v&agrave; lưu trữ tờ gấp một c&aacute;ch văn minh để ph&aacute;t huy được hết &yacute; nghĩa của c&ocirc;ng t&aacute;c tuy&ecirc;n truyền.</p>\\n\\n<p>Một số h&igrave;nh ảnh về buổi ph&aacute;t tờ gấp:</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:486px; width:621px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\">&nbsp;</p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:342px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:347px; width:512px\\\" /></p>\\n\\n<p style=\\\"text-align:center\\\"><img alt=\\\"\\\" src=\\\"/app/storage/16956688888051.jpg\\\" style=\\\"height:366px; width:512px\\\" /></p>\\n\",",
        "image": "%2Fapp%2Fstorage%2F1696012832477110eư.png",
        "cre_date": "2023-09-29T17:00:00.000Z",
        "author": "Anh Mai",
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
    const router = useRouter();
    const { slug } = router.query;
    const { language } = useContext(LanguageContext);
    const post = posts.filter((post) => {return `${convertPath(post.name)}-${post.id_post}` == slug})
    const classes = useStyles();
    
    return(
        <>
            <Head>
            <title>
                {language =='vi' ? post[0]['name'] : post[0]['name_en']} | MEKONG MARINE SUPPLY CO., LTD
            </title>
            </Head>
            <Grid item md={12}>
              <Container maxWidth="md">
                <Grid
                  container
                  classes={{ root: classes.container }}
                  className={"animate__animated animate__delay-0.1s"}
                >
                  <Box
                    sx={{
                        width: '100%',
                        height: {
                            xs: '200px',
                            md: '200px',
                            lg: '300px'
                        },
                        // backgroundImage: `url('${'https://1454-183-80-32-33.ngrok-free.app'}/read_image/${post[0].image})`,
                        backgroundImage:`url("https://s3.eu-central-1.wasabisys.com/rta-rtcloud/file_1696925763347.jpg")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                  >
                  </Box>
                  <Box
                    sx={{ display: "flex", padding: "30px 0" }}
                    className={"animate__animated animate__delay-0.1s"}
                  >
                    <Box sx={{display: "flex", borderBottom:'1px solid var(--gray-light)'}}>
                      <Box
                        sx={{
                          height: "100%",
                          backgroundColor: "var(--light-blue)",
                          textAlign: "center",
                          padding: "10px",
                          marginRight:"15px"
                        }}
                      >
                        <Typography color={"var(--white)"} variant="h7" fontWeight="bolder">
                          {
                            convertDate(post[0].cre_date, '%Y/%M')
                          }
                        </Typography>
                        <Typography color={"var(--white)"} variant="h4" fontWeight="bolder">
                          {
                            convertDate(post[0].cre_date, '%D')
                          }
                        </Typography>
                      </Box>
                      <Typography
                        fontFamily={"var(--font-family-header)"}
                        color={"var(--dark-blue)"}
                        variant="h4"
                        component="h4"
                        fontWeight="bolder"
                      >
                        {language == 'vi' ? post[0]['name'] : post[0]['name_en']}
                      </Typography>
                    </Box>
                  </Box>
                  <div 
                    className='ck-content'
                    dangerouslySetInnerHTML={{__html:language == 'vi' ? post[0]['content'] : post[0]['content_en']}}

                  >

                  </div>

                </Grid>
              </Container>
            </Grid>
        </>
    )
};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

Page.getInitialProps = async (ctx) => {
  // const res = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/post/list')
  // const json = await res.json()

  const json = {
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
  return { posts: json.results }
}
export default Page;

const convertDate = (date, options)=>{
  const cre_date = new Date(date);
  let value = options.replace('%M',cre_date.getMonth() < 10 ? '0'+cre_date.getMonth(): cre_date.getMonth()).replace('%Y',cre_date.getFullYear()).replace('%D',cre_date.getDate() < 10 ? '0' + cre_date.getDate() : cre_date.getDate())
  return value
}