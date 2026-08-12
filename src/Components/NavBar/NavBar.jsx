"use client";

import { useState } from "react";

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
  "Continuous Inkjet (CIJ)",
  "Laser Marking Systems",
  "Thermal Inkjet (TIJ)",
  "Thermal Transfer Overprinters (TTO)",
  "Large Character Printers",
  "High-Resolution Printers",
  "Label Printing & Applicators",
  "Vision Inspection Systems",
  "Checkweighers",
  "Metal Detectors",
  "Packaging Automation",
  "Track & Trace Solutions",
  "Industrial Consumables (Ink, Make-up, Solvents, Ribbons)",
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bgOrange">
      {/* Logo */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a
            href="/home"
            className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Itech International Group</span>

            <img
              alt="Itech International Group"
              src={logoWithoutBg}
              className="h-[45px] w-auto sm:h-[55px] md:h-[65px] lg:h-[70px]"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>

            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {/* Home */}
          <a
            href="/home"
            className="text-[18px] font-semibold textGrey"
          >
            Home
          </a>

          {/* About Us */}
          <a
            href="/about"
            className="text-[18px] font-semibold textGrey"
          >
            About Us
          </a>

          {/* ================= PRODUCTS POPOVER ================= */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-[18px] font-semibold textGrey outline-none">
              Products

              <ChevronDownIcon
                aria-hidden="true"
                className="size-5"
              />
            </PopoverButton>

            <PopoverPanel
              className="absolute left-1/2 z-50 mt-5 w-screen max-w-6xl -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/10"
            >
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-indigo-600">
                    Our Products
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                    Industrial Coding, Marking & Inspection Solutions
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    Explore our range of industrial printing, marking,
                    inspection, packaging, and traceability solutions.
                  </p>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <a
                      key={product}
                      href="/products"
                      className="group flex items-center gap-x-4 rounded-xl p-3 transition hover:bg-gray-50"
                    >
                      {/* Icon */}
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
                        <SquaresPlusIcon className="size-5" />
                      </div>

                      {/* Product name */}
                      <span className="text-sm font-semibold leading-6 text-gray-900 transition group-hover:text-indigo-600">
                        {product}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="flex flex-col gap-2 border-t border-gray-100 bg-gray-50 px-8 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                <p className="text-sm text-gray-600">
                  Need help choosing the right solution?
                </p>

                <a
                  href="/contact"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Talk to our experts
                  <span
                    aria-hidden="true"
                    className="ml-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Our Solutions */}
          <a
            href="/solutions"
            className="text-[18px] font-semibold textGrey"
          >
            Our Solutions
          </a>

          {/* Industries */}
          <a
            href="/industries"
            className="text-[18px] font-semibold textGrey"
          >
            Industries We Serve
          </a>
        </div>

        {/* Contact Us */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-[18px] font-semibold textGrey"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bgOrange p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <a
              href="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">
                Itech International Group
              </span>

              <img
                alt="Itech International Group"
                src={logoWithoutBg}
                className="h-[45px] w-auto sm:h-[55px] md:h-[65px] lg:h-[70px]"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>

              <XMarkIcon
                aria-hidden="true"
                className="size-6"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Home */}
                <a
                  href="/home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50"
                >
                  Home
                </a>

                {/* About Us */}
                <a
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50"
                >
                  About Us
                </a>

                {/* Products */}
                <a
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50"
                >
                  Products
                </a>

                {/* Our Solutions */}
                <a
                  href="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50"
                >
                  Our Solutions
                </a>

                {/* Industries We Serve */}
                <a
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold textGrey hover:bg-gray-50"
                >
                  Industries We Serve
                </a>
              </div>

              {/* Contact Us */}
              <div className="py-6">
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold textGrey hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}