import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/FixedNav";
import { cn } from "../utils/cn";
// PRICING
import IndivisualPricing from "../assets/IndivisualPricing.png";
import TeamPricing from "../assets/TeamPricing.png";
import EnterprisePricing from "../assets/EnterprisePricing.png";
import OrganizationPricing from "../assets/OrganizationPricing.png";
import { styled } from "@mui/system";
import Slide from "@mui/material/Slide";
// OTHERS
import About from "../assets/about.png";
import Doc from "../assets/doc.png";
import Careers from "../assets/Careers.png";
import Changelog from "../assets/changelog.png";
import Blog from "../assets/blog.png";
import { AiOutlineMenu } from "react-icons/ai"; // Import the menu icon from react-icons
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import LinkPreview from "../ui/LinkTest";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Card,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
// or
import { IconButton } from "@mui/material";
import { color } from "framer-motion";
import { Button } from "../ui/movingBorderButton";
import Render from "../assets/render-logo.png";
import { render } from "@react-three/fiber";
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    transition: "transform 1s ",
  },
}));
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        // opacity: 0.5,
        paddingTop: "5%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 5,
          paddingRight: 5,
          paddingBottom: 3,
        }}
      >
        <p style={{ fontSize: 30 }}>Welcome </p>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon size={24} style={{ fill: "white" }} />
        </IconButton>
      </Box>
      <Divider style={{ backgroundColor: "white" }} />
      <List
        sx={{ paddingTop: 7, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {["Product", "Pricing", "Others"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <LinkPreview url="https://equals.com/" className="font-bold">
                <p
                  style={{
                    fontSize: 25,
                    fontWeight: 300,
                    position: "fixed",
                    left: "20px",
                    color: "#9a9c9a",
                  }}
                >
                  {text}
                </p>
              </LinkPreview>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  console.log(drawerOpen);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div className="flex justify-between items-center md:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <AiOutlineMenu size={24} style={{ fill: "white" }} />
        </IconButton>
      </div>
      <Drawer
        // sx={{ backgroundColor: "black", opecity: ".5" }}
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        // TransitionComponent={(props) => (
        //   <Slide {...props} direction="left" timeout={500} />
        // )}
      >
        {DrawerList}
      </Drawer>

      <div className="hidden md:flex justify-center">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="PRODUCTS">
            <div className="flex gap-3">
              <div className="md:flex md:flex-col md:space-y-4 md:text-sm flex flex-col text-xs">
                <p className=" font-bold text-lg text-green-400">FEATURES</p>
                <HoveredLink to="/web-dev">Autoscaling</HoveredLink>
                <HoveredLink to="/interface-design">
                  Private Networking
                </HoveredLink>
                <HoveredLink to="/seo">Managed PostgreSQL</HoveredLink>
                <HoveredLink to="/branding">Maganed Redis</HoveredLink>
                <HoveredLink to="/branding">Presistent Disks</HoveredLink>
                <HoveredLink to="/branding">Infrastucture as Code</HoveredLink>
                <HoveredLink to="/branding">Preview Environments</HoveredLink>
                <HoveredLink to="/branding">Zero Downtime Deploys</HoveredLink>
                <HoveredLink to="/branding">Render API</HoveredLink>
              </div>
              <div className="flex flex-col space-y-4 text-sm">
                <p className=" font-bold text-lg text-green-400">SERVICES</p>
                <HoveredLink to="/web-dev">Static Sites</HoveredLink>
                <HoveredLink to="/interface-design">Web Services</HoveredLink>
                <HoveredLink to="/seo">Private Services</HoveredLink>
                <HoveredLink to="/branding">Background Workers</HoveredLink>
                <HoveredLink to="/branding">Cron Jobs</HoveredLink>
                <HoveredLink to="/branding">PostgreSQL</HoveredLink>
                <HoveredLink to="/branding">Redis</HoveredLink>
              </div>
              <div className="flex flex-col space-y-4 text-sm">
                <p className=" font-bold text-lg text-green-400">RUNTIMES</p>
                <HoveredLink to="/web-dev">Node</HoveredLink>
                <HoveredLink to="/interface-design">Docker</HoveredLink>
                <HoveredLink to="/seo">Static Sites</HoveredLink>
                <HoveredLink to="/branding">Python</HoveredLink>
                <HoveredLink to="/branding">Ruby</HoveredLink>
                <HoveredLink to="/branding">Elixir</HoveredLink>
                <HoveredLink to="/branding">Go</HoveredLink>
                <HoveredLink to="/branding">Rust</HoveredLink>
                <HoveredLink to="/branding">PHP</HoveredLink>
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="PRICING">
            <div className="text-sm grid md:grid-cols-2 gap-5 p-1">
              <ProductItem
                title="Indivisual"
                // href="https://algochurn.com"
                src={IndivisualPricing}
                description="For hobbyists, students, and indie hackers."
              />
              <ProductItem
                title="Team"
                // href="https://tailwindmasterkit.com"
                src={TeamPricing}
                description="For small teams and early-stage startups."
              />
              <ProductItem
                title="Enterprise"
                // href="https://gomoonbeam.com"
                src={EnterprisePricing}
                description="For larger teams with complex needs."
              />
              <ProductItem
                title="Organization"
                // href="https://userogue.com"
                src={OrganizationPricing}
                description="For ultimate power and customization."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="OTHERS">
            <div className="w-fit text-sm grid md:grid-cols-2 gap-5 p-1 pr-4">
              <ProductItem
                title="CAREERES"
                // href="https://algochurn.com"
                src={Careers}
                description="Bring Your Expertise to Render"
              />
              <ProductItem
                title="CHANGLOG"
                // href="https://tailwindmasterkit.com"
                src={Changelog}
                description="New Plans"
              />
              <ProductItem
                title="ABOUT"
                // href="https://gomoonbeam.com"
                src={About}
                description="We build accessible and reliable cloud infrastructure."
              />
              <ProductItem
                title="DOCS"
                // href="https://userogue.com"
                src={Doc}
                description="Render Quickstarts Deploy your code in just a few clicks."
              />
              <ProductItem
                title="BLOG"
                // href="https://userogue.com"
                src={Blog}
                description="Interesting & Knowlagble Blog"
              />
            </div>
          </MenuItem>
          {/* <MenuItem setActive={setActive} active={active} item="OTHERS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/CAREERES">CAREERES</HoveredLink>
            <HoveredLink to="/CHANGLOG">CHANGLOG</HoveredLink>
            <HoveredLink to="/BLOG">BLOG</HoveredLink>
            <HoveredLink to="/DOCS">DOCS</HoveredLink>
          </div>
        </MenuItem> */}
        </Menu>
      </div>
    </div>
  );
}
