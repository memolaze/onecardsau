/* ============================================================
   ONECARDSAU Terms & Conditions Page
   ============================================================ */

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0F1117]/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
              O
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
              Onecardsau
            </span>
          </a>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500 mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
            Last updated: June 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8" style={{ fontFamily: "Inter, sans-serif" }}>
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                1. Agreement to Terms
              </h2>
              <p className="text-slate-400 leading-relaxed">
                By accessing and using the Onecardsau platform, website, and services, you agree to be bound by these Terms & Conditions. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                2. Use License
              </h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on Onecardsau's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                3. Disclaimer
              </h2>
              <p className="text-slate-400 leading-relaxed">
                The materials on Onecardsau's website are provided on an 'as is' basis. Onecardsau makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                4. Limitations
              </h2>
              <p className="text-slate-400 leading-relaxed">
                In no event shall Onecardsau or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Onecardsau's website, even if Onecardsau or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                5. Accuracy of Materials
              </h2>
              <p className="text-slate-400 leading-relaxed">
                The materials appearing on Onecardsau's website could include technical, typographical, or photographic errors. Onecardsau does not warrant that any of the materials on its website are accurate, complete, or current. Onecardsau may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                6. Links
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Onecardsau has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Onecardsau of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                7. Modifications
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Onecardsau may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                8. Governing Law
              </h2>
              <p className="text-slate-400 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of New South Wales, Australia, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                9. Contact Information
              </h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Onecardsau Pty Ltd</p>
                <p className="text-slate-400 text-sm">Phone: +61 449928988</p>
                <p className="text-slate-400 text-sm">Email: hello@onecardsau.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/6 bg-[#0A0D14] py-8 mt-20">
        <div className="container text-center">
          <p className="text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2025 Onecardsau Pty Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
