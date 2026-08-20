"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import logoWithoutBg from "../../assets/logoWithoutBg.png";

const products = [
  {
    name: "Continuous Inkjet (CIJ)",
    id: "cij",
  },
  {
    name: "Laser Marking Systems",
    id: "laser-marking",
  },
  {
    name: "Thermal Inkjet (TIJ)",
    id: "tij",
  },
  {
    name: "Thermal Transfer Overprinters (TTO)",
    id: "tto",
  },
  {
    name: "Large Character Printers",
    id: "large-character",
  },
  {
    name: "High-Resolution Printers",
    id: "high-resolution",
  },
  {
    name: "Track & Trace Solutions",
    id: "track-trace",
  },
  {
    name: "Vision Inspection Systems",
    id: "vision-inspection",
  },
  {
    name: "Checkweighers",
    id: "checkweighers",
  },
  {
    name: "Metal Detectors",
    id: "metal-detectors",
  },
  {
    name: "Packaging Automation",
    id: "packaging-automation",
  },

  {
    name: "Label Printing & Applicators",
    id: "label-printing",
  },
  {
    name: "Industrial Consumables (Ink, Make-up, Solvents, Ribbons)",
    id: "industrial-consumables",
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 z-50 w-full bgOrange'>
      {/* Logo */}
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8'>
        <div className='flex lg:flex-1'>
          <Link
            to='/'
            className='-m-1.5 p-1.5'
            onClick={() => setMobileMenuOpen(false)}>
            <span className='sr-only'>Itech International Group</span>

            <img
              alt='Itech International Group'
              src={logoWithoutBg}
              className='h-[45px] w-auto sm:h-[55px] md:h-[65px] lg:h-[70px]'
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
            <span className='sr-only'>Open main menu</span>

            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex lg:gap-x-10'>
          {/* Home */}
          <Link to='/' className='text-[18px] font-semibold textGrey'>
            Home
          </Link>

          {/* About Us */}
          <Link to='/about' className='text-[18px] font-semibold textGrey'>
            About Us
          </Link>

          {/* ================= PRODUCTS POPOVER ================= */}
          <Popover className='relative'>
            <PopoverButton className='flex items-center gap-x-1 text-[18px] font-semibold textGrey outline-none'>
              Products
              <ChevronDownIcon aria-hidden='true' className='size-5' />
            </PopoverButton>

            <PopoverPanel className='absolute left-1/2 z-50 mt-5 w-screen max-w-6xl -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/10'>
              {({ close }) => (
                <div className='p-8 lg:p-10'>
                  {/* Header */}
                  <div className='mb-8'>
                    <p className='text-lg font-bold textOrange'>
                      Our Products
                    </p>

                    <h3 className='mt-1 text-2xl font-semibold tracking-tight textBlue'>
                      Industrial Coding, Marking & Inspection Solutions
                    </h3>

                    {/* <p className='mt-2 max-w-2xl text-md leading-6 textBlue'>
                      Explore our range of industrial printing, marking,
                      inspection, packaging, and traceability solutions.
                    </p> */}
                  </div>

                  {/* Products */}
                  <div className='grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3'>
                    {products.map((product) => (
                      <Link
                        key={product}
                        to={`/products/${product.id}`}
                        onClick={() => close()}
                        className='group flex items-center gap-x-4 rounded-xl p-3 transition hover:bg-gray-50'>
                        <div className='flex size-10 shrink-0 items-center justify-center rounded-lg bgOrange text-white transition group-hover:bg-white'>
                          <SquaresPlusIcon className='size-5' />
                        </div>

                        <span className='text-lg font-bold leading-6 textOrange transition group-hover:text-indigo-600'>
                          {product.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </PopoverPanel>
          </Popover>

          {/* Our Solutions */}
          <Link to='/solutions' className='text-[18px] font-semibold textGrey'>
            Our Solutions
          </Link>

          {/* Industries */}
          <Link to='/industry' className='text-[18px] font-semibold textGrey'>
            Industries We Serve
          </Link>
        </div>

        {/* Contact Us */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='https://wa.me/8006902440?text=Hi! I’d like to know more about your products and services.'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[18px] font-semibold textGrey'>
            Contact Us
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'>
        <div className='fixed inset-0 z-50' />

        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bgOrange p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          {/* Mobile Header */}
          <div className='flex items-center justify-between'>
            <Link
              to='/'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-1.5 p-1.5'>
              <span className='sr-only'>Itech International Group</span>

              <img
                alt='Itech International Group'
                src={logoWithoutBg}
                className='h-[45px] w-auto sm:h-[55px] md:h-[65px] lg:h-[70px]'
              />
            </Link>

            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Close menu</span>

              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/* Home */}
                <Link
                  to='/'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50'>
                  Home
                </Link>

                {/* About Us */}
                <Link
                  to='/about'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50'>
                  About Us
                </Link>

                {/* Products */}
                <Link
                  to='/products'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50'>
                  Products
                </Link>

                {/* Our Solutions */}
                <Link
                  to='/solutions'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50'>
                  Our Solutions
                </Link>

                {/* Industries We Serve */}
                <Link
                  to='/industry'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50'>
                  Industries We Serve
                </Link>
              </div>

              {/* Contact Us */}
              <div className='py-6'>
                <Link
                  to='/contact'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold textGrey'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
