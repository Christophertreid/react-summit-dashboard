import * as s from './styles'
import logo from '../../../assets/svg/summit-med.svg'
import logoSm from '../../../assets/svg/summit-sm.svg'
const Sidebar = () => {
  return (
    <s.Sidebar>
      <s.SideLogo><source media='(min-width:768px)' srcSet={logo}/><img src={logoSm}/></s.SideLogo>
      <s.PageSection>
        <s.PageLink to="/dashboard/dashboard">
          <span><svg strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M496 496H16V16h32v448h448v32z"></path><path d="M192 432H80V208h112zm144 0H224V160h112zm143.64 0h-112V96h112z"></path></svg></span><span>Dashboard</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M450 128a46 46 0 00-44.11 59l-71.37 71.36a45.88 45.88 0 00-29 0l-52.91-52.91a46 46 0 10-89.12 0L75 293.88A46.08 46.08 0 10106.11 325l87.37-87.36a45.85 45.85 0 0029 0l52.92 52.92a46 46 0 1089.12 0L437 218.12A46 46 0 10450 128z"></path></svg></span><span>Analytics</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M240 216V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224H248a8 8 0 01-8-8z"></path><path d="M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z"></path></svg></span><span>Reports</span>
        </s.PageLink>
      </s.PageSection>
      <s.PageSection>
        <s.PageLink to="/dashboard">
          <span><svg strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="32"></circle><circle cx="400" cy="416" r="32"></circle><path d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z"></path></svg></span><span>Orders</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="152" cy="184" r="72"></circle><path d="M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34z"></path><path d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96z"></path><circle cx="340" cy="168" r="88"></circle></svg></span><span>Customers</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M392 16H120a24 24 0 00-24 24v336a24 24 0 0024 24h272a24 24 0 0024-24V40a24 24 0 00-24-24zM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01208 64zm-28.53 287.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zm160 0a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM384 144v64H128v-64zm-86 272l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416h-45z"></path></svg></span><span>Shipments</span>
        </s.PageLink>
      </s.PageSection>
      <s.PageSection>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 128h256v38H128zm-16 64h288v38H112z"></path><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z"></path></svg></span><span>Categories</span>
        </s.PageLink>
        <s.PageLink to="/dashboard/products">
          <span><svg strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm188 91a112 112 0 01-224 0v-32h32v32a80 80 0 00160 0v-32h32z"></path></svg></span><span>Products</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 144v332a4 4 0 004 4h100.07a8 8 0 007.82-9.7L208.71 352H232a8 8 0 008-8V144zm324.18 42.55L448 185.5V36a4 4 0 00-4-4h-42.5a4 4 0 00-2.63 1L272 144v160l126.87 111a4 4 0 002.63 1H444a4 4 0 004-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45zM96 144H52a4 4 0 00-4 4v35.59a43 43 0 00-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 004 4h44z"></path></svg></span><span>Promotions</span>
        </s.PageLink>
      </s.PageSection>
      <s.PageSection>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33m272-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128"></path></svg></span><span>Inventory</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M408 16H104a24 24 0 00-24 24v432a24 24 0 0024 24h304a24 24 0 0024-24V40a24 24 0 00-24-24zm-61.1 296.77a43 43 0 11-40.71-40.71 43 43 0 0140.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z"></path></svg></span><span>Vendors</span>
        </s.PageLink>
        <s.PageLink to="/dashboard">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M240 304h32l6-160h-44l6 160z"></path><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z"></path></svg></span><span>Recalls</span>
        </s.PageLink>
      </s.PageSection>
    </s.Sidebar>
  );
}
 
export default Sidebar;