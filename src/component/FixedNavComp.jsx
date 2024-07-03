import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/FixedNav";
import { cn } from "../utils/cn";
import IndivisualPricing from "../assets/IndivisualPricing.png";
import TeamPricing from "../assets/TeamPricing.png";
import EnterprisePricing from "../assets/EnterprisePricing.png";
import OrganizationPricing from "../assets/OrganizationPricing.png";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="PRODUCTS">
          <div className="flex gap-3">
            <div className="flex flex-col space-y-4 text-sm">
              <p className=" font-bold text-lg text-green-400">FEATURES</p>
              <HoveredLink to="/web-dev">Autoscaling</HoveredLink>
              <HoveredLink to="/interface-design">Private Networking</HoveredLink>
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
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/CAREERES">CAREERES</HoveredLink>
            <HoveredLink to="/CHANGLOG">CHANGLOG</HoveredLink>
            <HoveredLink to="/BLOG">BLOG</HoveredLink>
            <HoveredLink to="/DOCS">DOCS</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
