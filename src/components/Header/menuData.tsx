import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 51,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 511,
        title: "Car Door Unlocking",
        path: "/services/car-door-unlocking",
        newTab: false,
      },
      {
        id: 512,
        title: "Apartment Door Unlocking",
        path: "/services/apartment-door-unlocking",
        newTab: false,
      },
      {
        id: 513,
        title: "Lock Replacement",
        path: "/services/lock-replacement",
        newTab: false,
      },
      {
        id: 514,
        title: "Safe Box Unlocking",
        path: "/services/safe-box-unlocking",
        newTab: false,
      },
      {
        id: 515,
        title: "Car Key Replacement",
        path: "/services/car-key-replacement",
        newTab: false,
      },
      {
        id: 516,
        title: "Car Key Programming",
        path: "/services/car-key-programming",
        newTab: false,
      },
      {
        id: 517,
        title: "House Door Unlocking",
        path: "/services/house-door-unlocking",
        newTab: false,
      },
      {
        id: 518,
        title: "Padlock Key Cutting & Replacement",
        path: "/services/padlock-key-cutting-replacement",
        newTab: false,
      },
      {
        id: 519,
        title: "Duplicate Key Cutting",
        path: "/services/duplicate-key-cutting",
        newTab: false,
      },
      {
        id: 520,
        title: "Maintaining & Repairing Locks",
        path: "/services/maintaining-repairing-locks",
        newTab: false,
      },
    ],
  },
  {
    id: 53,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
