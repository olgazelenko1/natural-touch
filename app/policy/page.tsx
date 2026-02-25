export default function PoliciesPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Policies</h1>

      {/* Cookies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Política de Cookies</h2>
        <p className="mb-2">
          We use cookies to improve your experience. Cookies help us personalize
          content, analyze traffic, and provide essential functionality.
        </p>
        <p className="mb-2">
          You can manage your cookie preferences through your browser at any
          time.
        </p>
        <p>
          By continuing to browse the site, you agree to our use of cookies.
        </p>
      </section>

      {/* Privacy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Política de Privacidade</h2>
        <p className="mb-2">
          Your privacy is important. All data collected via contact forms is
          used exclusively to respond to your requests and improve our services.
        </p>
        <p className="mb-2">
          We do not share personal information with third parties without your
          explicit consent.
        </p>
        <p>
          You can access, correct, or request deletion of your data by
          contacting us.
        </p>
      </section>
    </main>
  );
}
