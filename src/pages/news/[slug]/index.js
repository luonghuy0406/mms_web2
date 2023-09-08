import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => {
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    }
  };
});
const Page = () => {
    const router = useRouter    ();
    const { slug } = router.query;

    const classes = useStyles();
    return(
        <>
            <Head>
            <title>
                A | MEKONG MARINE SUPPLY CO., LTD
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
                        backgroundImage: 'url(https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-scaled.jpg)',
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
                          2023/09
                        </Typography>
                        <Typography color={"var(--white)"} variant="h4" fontWeight="bolder">
                          08
                        </Typography>
                      </Box>
                      <Typography
                        fontFamily={"var(--font-family-header)"}
                        color={"var(--dark-blue)"}
                        variant="h4"
                        component="h4"
                        fontWeight="bolder"
                      >
                        NEWTECONS TỔ CHỨC CHUỖI HOẠT ĐỘNG CHÀO MỪNG NGÀY TRUYỀN THỐNG 2023
                      </Typography>
                    </Box>
                  </Box>
                  <div className="body m-top-40">
  <p>
    <strong>
      <em>
        Ngày thứ sáu đầu tiên của tháng 8 hằng năm là một ngày đặc biệt của
        Newtecons nói riêng và các công ty trong Hệ sinh thái nói chung – Ngày
        Truyền thống. Để chào mừng sự kiện quan trọng này, Newtecons đã triển
        khai hàng loạt các hoạt động sôi nổi, trên tinh thần gắn kết và lan tỏa
        để lại dấu ấn đặc biệt trong lòng toàn bộ CBNV.&nbsp;
      </em>
    </strong>
  </p>
  <ul>
    <li aria-level={1}>
      <b>Hiến máu nhân đạo – Ngày hội hiến máu</b>
    </li>
  </ul>
  <p>
    <span style={{ fontWeight: 400 }}>
      Nhằm lan tỏa tình yêu thương, lòng nhân ái và thể hiện trách nhiệm với
      cộng đồng, nhân Ngày truyền thống của Hệ sinh thái, sáng ngày 29/07/2023
      Newtecons cùng các công ty phối hợp với Trung tâm Hiến máu nhân đạo
      TP.HCM&nbsp; tổ chức chương trình “Ngày hội giọt hồng”. Với thông điệp{" "}
    </span>
    <b>
      <i>“Một giọt máu cho đi- một cuộc đời ở lại”</i>
    </b>
    <span style={{ fontWeight: 400 }}>
      {" "}
      sự kiện đã thu hút sự tham gia của rất nhiều CBNV và hơn{" "}
    </span>
    <span style={{ fontWeight: 400 }}>200</span>
    <span style={{ fontWeight: 400 }}>
      {" "}
      đơn vị máu đã được chia sẻ, đóng góp vào ngân hàng máu. Đây là một trong
      những hoạt động diễn ra thường xuyên tại Hệ sinh thái được triển khai hiệu
      quả, có sức lan tỏa sâu rộng nhằm chung tay đóng góp cho cộng đồng.
    </span>
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13463 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03.png"
      alt=""
      width={2481}
      height={1768}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03.png 2481w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03-300x214.png 300w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03-1024x730.png 1024w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03-768x547.png 768w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03-1536x1095.png 1536w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-03-2048x1459.png 2048w"
      sizes="(max-width: 2481px) 100vw, 2481px"
    />
  </p>
  <ul>
    <li aria-level={1}>
      <b>Cuộc thi “ Nụ cười đong đầy”</b>
    </li>
  </ul>
  <p>
    <span style={{ fontWeight: 400 }}>
      Trong hai tuần qua, hoạt động chia sẻ hình ảnh với chủ đề{" "}
    </span>
    <b>“Nụ cười đong đầy”</b>
    <span style={{ fontWeight: 400 }}>
      {" "}
      đã để lại ấn tượng sâu sắc và thu hút được sự quan tâm của nhiều CBNV.
      Không chỉ những hình ảnh vui tươi, hạnh phúc, chứa đựng tình yêu và thú vị
      của cuộc sống của Anh Chị Em CBNV được đăng tải, chương trình cũng nhận
      được những lời chia sẻ về cuộc sống đầy ý nghĩa, tiếp thêm động lực cho
      tất cả CBNV. Cuộc thi diễn ra từ ngày 22/7 đến ngày 6/8 và được công bố
      kết quả vào 9
    </span>
    <span style={{ fontWeight: 400 }}>/8.</span>
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13462 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02.png"
      alt=""
      width={2091}
      height={2332}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02.png 2091w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02-269x300.png 269w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02-918x1024.png 918w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02-768x857.png 768w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02-1377x1536.png 1377w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-02-1836x2048.png 1836w"
      sizes="(max-width: 2091px) 100vw, 2091px"
    />
  </p>
  <ul>
    <li aria-level={1}>
      <b>Sự</b>
      <b> kiện Morning Coffee</b>
    </li>
  </ul>
  <p>
    <span style={{ fontWeight: 400 }}>
      Tiếp nối các hoạt động ý nghĩa chào mừng Ngày tryền thống, sáng ngày 03/8,
      tại “Ngôi nhà chung” – Newtecons Tower,{" "}
    </span>
    <span style={{ fontWeight: 400 }}>
      Anh Em Chị của 6 Công ty đã có dịp thưởng thức cafe sáng, trò chuyện cùng
      với nhau và cùng nhau lưu giữ những hình ảnh đẹp, chứa đựng trong đó là sự
      hạnh phúc, niềm tự hào khi cùng làm việc dưới mái nhà chung
    </span>
    <span style={{ fontWeight: 400 }}>.</span>
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13454 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-scaled.jpg"
      alt=""
      width={2560}
      height={1285}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-scaled.jpg 2560w, https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-300x151.jpg 300w, https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-1024x514.jpg 1024w, https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-768x385.jpg 768w, https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-1536x771.jpg 1536w, https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-2048x1028.jpg 2048w"
      sizes="(max-width: 2560px) 100vw, 2560px"
    />
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13465 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04.png"
      alt=""
      width={2342}
      height={1565}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04.png 2342w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04-300x200.png 300w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04-1024x684.png 1024w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04-768x513.png 768w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04-1536x1026.png 1536w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-04-2048x1369.png 2048w"
      sizes="(max-width: 2342px) 100vw, 2342px"
    />
  </p>
  <ul>
    <li aria-level={1}>
      <b>Hoạt động gửi quà đến công trường</b>
    </li>
  </ul>
  <p>
    <span style={{ fontWeight: 400 }}>
      Một trong những hoạt động ý nghĩa nhất{" "}
    </span>
    <span style={{ fontWeight: 400 }}>
      là công tác tổ chức trao những hộp quà chứa đựng tình cảm từ BCH Công đoàn
      đến tập thể anh em BCH tại các công trường trên khắp mọi miền đất nước.
      Đây cũng là dịp để Anh Chị Em các Ban Chỉ huy ngồi lại với nhau để cùng
      chia sẻ những niềm vui cũng như thắt chặt tình đoàn kết và hỗ trợ nhau
      trong công việc để hướng đến mục tiêu chung.
    </span>
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13461 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01.png"
      alt=""
      width={2479}
      height={2339}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01.png 2479w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01-300x283.png 300w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01-1024x966.png 1024w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01-768x725.png 768w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01-1536x1449.png 1536w, https://newtecons.vn/wp-content/uploads/2023/08/Untitled-1-01-2048x1932.png 2048w"
      sizes="(max-width: 2479px) 100vw, 2479px"
    />
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13460 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-scaled.jpg"
      alt=""
      width={2560}
      height={1668}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-scaled.jpg 2560w, https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-300x195.jpg 300w, https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-1024x667.jpg 1024w, https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-768x500.jpg 768w, https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-1536x1001.jpg 1536w, https://newtecons.vn/wp-content/uploads/2023/08/z4570461383889_c54248ba587e0f72e12f96adaee391ca-2048x1334.jpg 2048w"
      sizes="(max-width: 2560px) 100vw, 2560px"
    />
  </p>
  <p>
    <img
      decoding="async"
      loading="lazy"
      className="size-full wp-image-13459 aligncenter"
      src="https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-scaled.jpg"
      alt=""
      width={2560}
      height={1541}
      srcSet="https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-scaled.jpg 2560w, https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-300x181.jpg 300w, https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-1024x616.jpg 1024w, https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-768x462.jpg 768w, https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-1536x925.jpg 1536w, https://newtecons.vn/wp-content/uploads/2023/08/z4570530133127_1dfe5d33888de59581668a63a5dc9e23-2048x1233.jpg 2048w"
      sizes="(max-width: 2560px) 100vw, 2560px"
    />
  </p>
  <p>
    <span style={{ fontWeight: 400 }}>
      Thông qua những hoạt động trên, Newtecons mong muốn mang lại những trải
      nghiệm ý nghĩa, nhiều niềm vui cho toàn thể CBNV. Đồng thời, đây cũng là
      những hoạt động quan trọng trong việc xây dựng Hệ sinh thái đoàn kết, vững
      mạnh và tràn đầy năng lượng.
    </span>
  </p>
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

export default Page;
