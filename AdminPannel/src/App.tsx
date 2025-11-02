import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import PostCountry from "./DashboardPages/PostCountry/PostCountry";
import VisaType from "./DashboardPages/VisaType/VisaType";
import PostTeamMember from "./DashboardPages/PostTeamMember/PostTeamMember";
import ContactManagemenet from "./DashboardPages/ContactManagemenet/ContactManagemenet";
import VisaPosting from "./DashboardPages/VisaPosting/VisaPosting";
import PreviewVisa from "./DashboardPages/PreviewVisa/PreviewVisa";
import BlogPosting from "./DashboardPages/BlogPosting/BlogPosting";
import PostTestimonial from "./DashboardPages/PostTestimonial/PostTestimonial";
import ClientAction from "./DashboardPages/ClientAction/ClientAction";
import FaqPosting from "./DashboardPages/FaqPosting/FaqPosting";
import AdvertizingBanner from "./DashboardPages/AdvertizingBanner/AdvertizingBanner";
import ViewProject from "./DashboardPages/ViewProject/ViewProject";
import CreateProject from "./DashboardPages/CreateProject/CreateProject";
import PostTeamMemberPreview from "./DashboardPages/PostTeamMemberPreview/PostTeamMemberPreview";
import CreateProduct from "./DashboardPages/CreateProduct/CreateProduct";
import PostCarrier from "./DashboardPages/PostCarrier/PostCarrier";
import TeamMembers from "./DashboardPages/TeamMembers/TeamMembers";
import PreviewTeamMember from "./DashboardPages/PreviewTeamMember/PreviewTeamMember";
import ClientsDetailsWorks from "./DashboardPages/ClientsDetailsWorks/ClientsDetailsWorks";
import ClientsDetailsWorksPreview from "./DashboardPages/ClientsDetailsWorksPreview/ClientsDetailsWorksPreview";
import CreateService from "./DashboardPages/CreateService/CreateService";
import PreviewServices from "./DashboardPages/PreviewServices/PreviewServices";
import PreviewBlog from "./DashboardPages/PreviewBlog/PreviewBlog";
import PreviewProduct from "./DashboardPages/PreviewProduct/PreviewProduct";
import PreviewProject from "./DashboardPages/PreviewProject/PreviewProject";
import PreviewCarrier from "./DashboardPages/PreviewCarrier/PreviewCarrier";



export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />

            {/* Others Page */}
            <Route path="profile" element={<UserProfiles />} />
            <Route path="blank" element={<Blank />} />

            {/* Forms */}
            <Route path="form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="basic-tables" element={<BasicTables />} />

            {/* Charts */}
            <Route path="line-chart" element={<LineChart />} />
            <Route path="bar-chart" element={<BarChart />} />



            {/* All DashBoard Pages , Routes Here!!!! */}
          <Route path="/country/manage" element={<PostCountry />} />
          <Route path="/country/visa-type" element={<VisaType />} />

          <Route path="/team/post-member" element={<PostTeamMember />} />

          <Route path="/contact/manage" element={<ContactManagemenet />} />
          <Route path="/visa/post-visa" element={<VisaPosting />} />
          <Route path="/visa/preview" element={<PreviewVisa />} />

          <Route path="/blog/post" element={<BlogPosting />} />
          <Route path="/blog/preview" element={<PreviewBlog />} />


          <Route path="/testimonial/post" element={<PostTestimonial />} />
          <Route path="/testimonial/client-action" element={<ClientAction />} />
          <Route path="/faq/post-faq" element={<FaqPosting />} />
          <Route path="/advertise/banner" element={<AdvertizingBanner />} />
          <Route path="/create/project" element={<CreateProject />} />
          <Route path="/project/view" element={<PreviewProject />} />

          
        
          <Route path="/create/manage-projects" element={<ViewProject />} />
          <Route path="/team/preview" element={<PostTeamMemberPreview />} />

          <Route path="/Create/Product" element={<CreateProduct />} />
          <Route path="/product/preview" element={<PreviewProduct />} />


          
          <Route path="/carrier/post" element={<PostCarrier />} />
          <Route path="/create/preview" element={<PreviewCarrier />} />
          

          <Route path="/team/members" element={<TeamMembers />} />
          <Route path="/team/preview-Member" element={<PreviewTeamMember/>} />

          <Route path="/clients/details-works" element={<ClientsDetailsWorks/>} />
          <Route path="/clients/review" element={<ClientsDetailsWorksPreview/>} />


          <Route path="/service/create" element={<CreateService/>} />
          <Route path="/service/Preview" element={<PreviewServices/>} />





          

          

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
