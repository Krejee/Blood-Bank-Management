import {
  ArchiveBoxArrowDownIcon,
  DonarIcon,
  HospitalIcon,
  AnalyticsIcon,
} from "../../../shared/Icons";
// import { ArchiveBoxArrowDownIcon, DonarIcon,HospitalIcon ,AnalyticsIcon} from "../../Icons";

export const OrganistionMenue = [
  {
    name: "Inventory",
    href: "/home",
    icon: ArchiveBoxArrowDownIcon,
    current: true,
  },
  { name: "Donar", href: "/donar", icon: DonarIcon, current: false },
  { name: "Hospital", href: "/hospital", icon: HospitalIcon, current: false },
  {
    name: "analytics",
    href: "/analytics",
    icon: AnalyticsIcon,
    current: false,
  },
];
