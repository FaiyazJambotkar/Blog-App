import { Box,Stack} from '@mui/material'
import AddArticleMobile from './AddArticleMobile'
import RightBar from './RightBar'
import SideBar from './SideBar'
import SocialMedia from './SocialMedia'
import ContentArea from './ContentArea'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {

  // const [mode,setMode] = useState("light")

  // const darkTheme = createTheme({ 
  //   palette:{
  //     mode:mode
  //   }
  // })
  
  // sx={{
  //   backgroundImage:`url(${bg})`,
  //   height:"100vh",
  //   width:"100%",
  //   backgroundPosition:"center" /* Center the image */,
  //   backgroundRepeat: "no-repeat" /* Do not repeat the image */,backgroundSize: " cover",
  //   overflow:"scroll",
  //   color:"white"
  // }}
 
  return (
    // <ThemeProvider theme={darkTheme}>
    <>
      <Navbar/>
    <Box >
    {/* bgcolor={"background.default"} color={"text.primary"} */}
    <Stack direction="row"  justifyContent="space-between"> 
          
        <SideBar></SideBar>
        <ContentArea></ContentArea>
        <RightBar></RightBar>
    
         {/* <SideBar setMode={setMode} mode={mode} onShowSidebar={onShowArticle} onNoSidebar={onNoShowArticle}> </SideBar> */}

    </Stack>

    <SocialMedia></SocialMedia>
    <AddArticleMobile></AddArticleMobile>
    <Footer></Footer>
    </Box>
    </>
 
    // </ThemeProvider>
  )
}

export default Home