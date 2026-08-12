import { useParams } from "react-router-dom";

export default function SolutionDetails() {
  const { productName } = useParams();

  return (
    <main className="bgGrey py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* IMAGE */}
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm lg:col-span-5">
            <img
              src="/placeholder-product.png"
              alt={productName}
              className="max-h-[350px] w-full object-contain"
            />
          </div>

          {/* USP */}
          <div className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide textOrange">
              Key Features
            </p>

            <h1 className="mt-2 text-3xl font-bold textBlue sm:text-4xl">
              {productName}
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600">
              High-performance industrial coding and marking solutions
              designed to improve production efficiency, reliability and
              product traceability.
            </p>

            {/* USP LIST */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <span className="textOrange">✓</span>
                <span className="text-sm text-gray-700">
                  High-speed printing
                </span>
              </div>

              <div className="flex gap-3">
                <span className="textOrange">✓</span>
                <span className="text-sm text-gray-700">
                  Reliable performance
                </span>
              </div>

              <div className="flex gap-3">
                <span className="textOrange">✓</span>
                <span className="text-sm text-gray-700">
                  Easy integration
                </span>
              </div>

              <div className="flex gap-3">
                <span className="textOrange">✓</span>
                <span className="text-sm text-gray-700">
                  Cost-effective operation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* TECHNICAL SPECIFICATIONS */}
          <div className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide textOrange">
              Specifications
            </p>

            <h2 className="mt-2 text-2xl font-bold textBlue">
              Technical Specifications
            </h2>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 px-4 py-4">
                <span className="font-medium text-gray-600">
                  Printing Speed
                </span>
                <span className="text-gray-900">
                  High Speed
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 px-4 py-4">
                <span className="font-medium text-gray-600">
                  Print Height
                </span>
                <span className="text-gray-900">
                  Variable
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 px-4 py-4">
                <span className="font-medium text-gray-600">
                  Interface
                </span>
                <span className="text-gray-900">
                  Touchscreen
                </span>
              </div>

              <div className="grid grid-cols-2 px-4 py-4">
                <span className="font-medium text-gray-600">
                  Applications
                </span>
                <span className="text-gray-900">
                  Industrial
                </span>
              </div>
            </div>
          </div>

          {/* VIDEO */}
          <div className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wide textOrange">
              See It In Action
            </p>

            <h2 className="mt-2 text-2xl font-bold textBlue">
              Product Video
            </h2>

            <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-gray-100">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title={`${productName} video`}
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-6 rounded-2xl bgBlue px-6 py-8 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-white">
            Have questions about this solution?
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-200">
            Our experts can help you choose the right solution for your
            production requirements.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-md bgOrange px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Connect With Our Experts
          </a>
        </div>

      </div>
    </main>
  );
}