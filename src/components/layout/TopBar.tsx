import { Mail, Phone, ExternalLink } from "lucide-react";
import { departmentInfo } from "@/data/departmentData";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-xs font-body hidden md:block">
    <div className="container flex items-center justify-between py-1.5">
      <span className="font-medium">
        {departmentInfo.shortName} | {departmentInfo.institutionShort}
      </span>
      <div className="flex items-center gap-4">
        <a href={`tel:${departmentInfo.phone}`} className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
          <Phone className="w-3 h-3" />
          {departmentInfo.phone}
        </a>
        <a href={`mailto:${departmentInfo.email}`} className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
          <Mail className="w-3 h-3" />
          {departmentInfo.email}
        </a>
        {/* <a href="#" className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
          <ExternalLink className="w-3 h-3" />
          Portal Login
        </a> */}
      </div>
    </div>
  </div>
);

export default TopBar;
