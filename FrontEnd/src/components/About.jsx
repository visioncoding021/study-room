import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-8 bg-yellow-100">
      <h1 className="text-4xl font-bold text-yellow-600 mb-8">About Us</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <CgProfile className="text-6xl text-yellow-600 mr-2" />
          <p className="text-2xl font-semibold text-yellow-600">Founder</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <p className="text-xl font-medium text-yellow-600 mb-2">
            <span className="font-semibold">Name</span> : <span>Rahul and Himanshi</span>
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            officia praesentium. Minima neque, illum ad fugiat quia molestiae
            dolor earum, corporis niquia rerum ut! Atque doloremque odio,
            voluptatum nihil minus fugiat nobis quae amet soluta ea laboriosam,
            debitis, esse voluptate veritatis nisi?
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-yellow-600 mt-8 mb-4">Video Streaming Platform</h2>
      <video
        className="w-full max-w-3xl mb-8"
        controls
        controlsList="nodownload"
      ></video>
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">Payment is secured with RazorPay</h2>
      <h3 className="text-xl font-bold text-yellow-600 mb-2">Terms and conditions</h3>
      <pre className="bg-white p-6 rounded-lg shadow-md text-left text-gray-700 whitespace-pre-wrap">
        ## Terms and Conditions

        ### Introduction
        Welcome to [EdTech Streaming Platform Name] (the "Platform"). By accessing or using our services, you agree to comply with and be bound by the following terms and conditions (the "Terms"). Please read them carefully. If you do not agree with these Terms, you should not use our Platform.

        ### 1. Acceptance of Terms
        By accessing and using the Platform, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you must refrain from using the Platform.

        ### 2. Changes to Terms
        We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting on the Platform. Your continued use of the Platform after any changes constitutes your acceptance of the new Terms.

        ### 3. Description of Service
        The Platform provides users with access to educational content, including video lectures, tutorials, and other learning materials (the "Service"). The Service may include additional features and functionalities as we may offer from time to time.

        ### 4. User Accounts
        - **Registration**: To access certain features of the Platform, you may be required to register and create an account. You must provide accurate and complete information during the registration process.
        - **Account Security**: You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.

        ### 5. Subscription and Payment
        - **Subscription Plans**: The Platform may offer various subscription plans with different access levels to the content and features. Details of these plans and their pricing are available on the Platform.
        - **Payment**: Subscription fees are billed on a recurring basis as specified during the subscription process. All payments are non-refundable except as required by law.
        - **Cancellation**: You may cancel your subscription at any time, but your access will continue until the end of the current billing period.

        ### 6. User Conduct
        You agree to use the Platform only for lawful purposes and in accordance with these Terms. You agree not to:
        - Engage in any conduct that could harm the Platform, its users, or third parties.
        - Use the Platform to transmit any harmful, threatening, defamatory, obscene, or otherwise objectionable content.
        - Violate any applicable local, national, or international law or regulation.
        - Interfere with or disrupt the operation of the Platform.

        ### 7. Content Ownership and Use
        - **Proprietary Rights**: All content available on the Platform, including videos, text, graphics, logos, and software, is the property of the Platform or its content suppliers and is protected by copyright and other intellectual property laws.
        - **User License**: Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the content for your personal, non-commercial use.

        ### 8. Termination
        We reserve the right to terminate or suspend your account and access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Platform, us, or third parties, or for any other reason.

        ### 9. Disclaimer of Warranties
        The Platform and all content and services provided through it are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Platform's operation or the content, information, or services provided through it.

        ### 10. Limitation of Liability
        To the fullest extent permitted by law, we disclaim all liability for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Platform. Our total liability to you for any claim arising out of or relating to these Terms or your use of the Platform shall not exceed the amount you paid us for the use of the Platform.

        ### 11. Governing Law
        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.

        ### 12. Dispute Resolution
        Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association], with the arbitration taking place in [Location].

        ### 13. Contact Information
        If you have any questions about these Terms, please contact us at [Contact Information].

        By using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
      </pre>
    </div>
  );
}

export default About;
