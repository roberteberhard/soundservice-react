import React from 'react'
import styled from 'styled-components'

// styles
const StyledImprintSection = styled.section`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledImprintInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  h1.title {
    margin-bottom: 50px;
    text-align: center;
    font-size: clamp(40px, 5vw, 48px);
  }
  p.heading {
    display: block;
    position: relative;
    margin-bottom: 10px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 500;
    text-align: center;
    &:before {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-right: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: right;
    }
    &:after {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-left: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: left;
    }
  }
  p.strong {
    font-weight: 600;
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--primary);
    font-size: clamp(17px, 1.5vw, 18px);
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--primary);
    font-size: clamp(16px, 1.5vw, 17px);
  }
  .innerDistance {
    margin-top: 40px;
  }
`

// markup
const Policy = () => {
  const data = (
    <>
      <p className="heading">Privacy</p>
      <h1 className="title">Privacy Policy</h1>
      <h5 className="date">Last updated June 13, 2022</h5>
      <h2>1. DATA PRIVACY AT A GLANCE</h2>
      <h3>GENERAL NOTES</h3>
      <p>The following notices provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.</p>
      <p>I may amend this privacy policy at any time without prior notice. The current version published on my website applies.</p>
      <h3>DATA COLLECTION ON THIS WEBSITE</h3>
      <h4>Who is responsible for the data collection on this website?</h4>
      <p>The data processing on this website is carried out by the website operator. You can find the contact details of the website operator in the section "Note about the responsible party" in this data protection declaration.</p>
      <h4>How do I collect your data?</h4>
      <p>On the one hand, your data is collected when you provide it to me. This can be, for example, data that you enter in a contact form.</p>
      <p>Other data is collected automatically or after your consent when you visit the website by our IT systems. This is mainly technical data (e.g. Internet browser, operating system or time of page view). The collection of this data takes place automatically as soon as you enter this website.</p>
      <h4>What do I use your data for?</h4>
      <p>Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.</p>
      <h4>What rights do you have regarding your data?</h4>
      <p>You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have a right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>
      <p>For this purpose, as well as for further questions on the subject of data protection, you can contact me at any time. </p>
      <h3>ANALYSIS TOOLS AND THIRD-PARTY TOOLS</h3>
      <p>When visiting this website, your surfing behavior can be statistically evaluated. This is done primarily with so-called analysis programs.</p>
      <p>Detailed information about these analysis programs can be found in the following privacy policy.</p>
      <h2>2. HOSTING UND CONTENT DELIVERY NETWORKS (CDN)</h2>
      <h3>EXTERNAL HOSTING</h3>
      <p>SG Hosting Inc. is a company registered and existing under the laws of Delaware, USA, with registered address: 901 N. Pitt St, Suite 325, Alexandria 22314 VA, USA. The privacy policy can be found here: https://www.siteground.com/privacy.htm. SG Hosting Inc. complies with the EU-U.S. Privacy Shield Framework and Swiss-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union and Switzerland to the United States.</p>
      <h2>3. GENERAL NOTES AND MANDATORY INFORMATION</h2>
      <h4>DATA PROTECTION</h4>
      <p>The operators of these pages take the protection of your personal data very seriously. I treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
      <p>When you use this website, various personal data are collected. Personal data is data with which you can be personally identified. This privacy policy explains what data I collect and what I use it for. It also explains how and for what purpose this is done.</p>
      <p>I would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.</p>
      <h3>NOTE TO THE RESPONSIBLE PARTY</h3>
      <p>This website and its content is provided by ROBERTEBERHARD. The responsible party within the meaning of the data protection laws and the DSGVO is</p>
      <p>
        Robert Eberhard
        <br />
        Schaffhauserstrasse 42
        <br />
        8400 Winterthur
        <br />
        hello@roberteberhard.com
      </p>
      <p>The controller is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g. names, e-mail addresses, etc.).</p>
      <h3>STORAGE DURATION</h3>
      <p>Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with me until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless I have other legally permissible reasons for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, the data will be deleted once these reasons no longer apply.</p>
      <h3>NOTE ON DATA TRANSFER TO THE USA</h3>
      <p>Among other things, tools from companies based in the USA are integrated on our website. If these tools are active, your personal data may be transferred to the US servers of the respective companies. I would like to point out that the USA is not a safe third country in the sense of EU data protection law. US companies are obliged to hand over personal data to security authorities without you as a data subject being able to take legal action against this. It can therefore not be ruled out that US authorities (e.g. intelligence services) process, evaluate and permanently store your data located on US servers for monitoring purposes. I have no influence on these processing activities.</p>
      <h3>REVOCATION OF YOUR CONSENT TO DATA PROCESSING</h3>
      <p>Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>
      <h3>RIGHT TO OBJECT TO THE COLLECTION OF DATA IN SPECIAL CASES AND TO DIRECT ADVERTISING</h3>
      <p>If the data processing is carried out on the basis of art. 6 abs. 1 lit. e or f DSGVO, you have the right to object to the processing of your personal data at any time for reasons arising from your particular situation; this also applies to profiling based on these provisions. The respective legal basis on which processing is based can be found in this privacy policy. If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing serves the purpose of asserting, exercising or defending legal claims (objection under article 21 (1) DSGVO).</p>
      <p>If your personal data is processed for the purpose of direct marketing, you have the right to object at any time to the processing of personal data concerning you for the purpose of such marketing; this also applies to profiling insofar as it is connected with such direct marketing. If you object, your personal data will subsequently no longer be used for the purpose of direct marketing (objection pursuant to article 21 (2) DSGVO).</p>
      <h3>RIGHT OF COMPLAINT TO THE COMPETENT SUPERVISORY AUTHORITY</h3>
      <p>In the event of breaches of the GDPR, data subjects shall have a right of appeal to a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged breach. The right of appeal is without prejudice to other administrative or judicial remedies.</p>
      <h3>RIGHT TO DATA TRANSFER</h3>
      <p>You have the right to have data that I process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done insofar as it is technically feasible.</p>
      <h3>SSL OR TLS ENCRYPTION</h3>
      <p>This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or requests that you send to me as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.</p>
      <p>If SSL or TLS encryption is activated, the data you transmit to me cannot be read by third parties.</p>
      <h3>INFORMATION, DELETION AND RECTIFICATION</h3>
      <p>Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of data processing and, if necessary, a right to correction or deletion of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact me at any time.</p>
      <h3>RIGHT TO RESTRICT PROCESSING</h3>
      <p>You have the right to request the restriction of the processing of your personal data. For this purpose, you can contact me at any time. The right to restriction of processing exists in the following cases:</p>
      <ul>
        <li>If you dispute the accuracy of your personal data stored by me, I usually need time to verify this. For the duration of the review, you have the right to request the restriction of the processing of your personal data.</li>
        <li>If the processing of your personal data happened/is happening unlawfully, you may request the restriction of data processing instead of erasure.</li>
        <li>If I no longer need your personal data, but you need it to exercise, defend or enforce legal claims, you have the right to request restriction of the processing of your personal data instead of deletion.</li>
        <li>If you have lodged an objection pursuant to Art. 21 (1) DSGVO, a balancing of your and our interests must be carried out. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
      </ul>
      <p>If you have restricted the processing of your personal data, this data may - apart from being stored - only be processed with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a Member State.</p>
      <h2>4. DATA COLLECTION ON THIS WEBSITE</h2>
      <h3>SERVER-LOG-FILES</h3>
      <p>When you access this website, information of a general nature is automatically collected. This information is collected in the server log file of my web hosting provider Siteground and includes the type of web browser, the operating system used, the domain name of your internet service provider, your IP address and the like. This ensures a smooth connection setup with my website and a smooth usage.</p>
      <p>Your data will not be used to draw conclusions about your person and will not be passed on to third parties. Information of this kind is only statistically evaluated to optimize my website and the technology behind it.</p>
      <h3>COOKIES</h3>
      <p>Our Internet pages use so-called "cookies". Cookies are small text files and do not cause any damage to your terminal device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your end device. Session cookies are automatically deleted at the end of your visit. Permanent cookies remain stored on your end device until you delete them yourself or until they are automatically deleted by your web browser.</p>
      <p>In some cases, cookies from third-party companies may also be stored on your terminal device when you enter our site (third-party cookies). These enable me or you to use certain services of the third-party company (e.g. cookies for processing payment services).</p>
      <p>Cookies have various functions. Many cookies are technically necessary, as certain website functions would not work without them (e.g. the shopping cart function or the display of videos). Other cookies are used to evaluate user behavior or display advertising.</p>
      <p>Cookies that are required to carry out the electronic communication process (necessary cookies) or to provide certain functions that you have requested (functional cookies, e.g. for the shopping cart function) or to optimize the website (e.g. cookies to measure the web audience) are stored on the basis of Art. 6 (1) lit. f DSGVO, unless another legal basis is specified. The website operator has a legitimate interest in storing cookies for the technically error-free and optimized provision of its services. If consent to store cookies has been requested, the cookies in question are stored exclusively on the basis of this consent (Art. 6 para. 1 lit. a DSGVO); consent can be revoked at any time.</p>
      <p>You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general and activate the automatic deletion of cookies when closing the browser. When deactivating cookies, the functionality of this website may be limited.</p>
      <p>If cookies are used by third-party companies or for analysis purposes, I will inform you about this separately within the framework of this data protection declaration and, if necessary, request your consent.</p>
      <h3>REQUEST BY E-MAIL OR PHONE</h3>
      <p>If you contact me by e-mail or phone, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by me for the purpose of processing your request. I will not pass on this data without your consent.</p>
      <p>The processing of this data is based on Art. 6 (1) lit. b DSGVO, if your request is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of requests addressed to me (Art. 6 para. 1 lit. f DSGVO) or on your consent (Art. 6 para. 1 lit. a DSGVO) if this was requested.</p>
      <p>The data you send to me via contact requests will remain with me until you request me to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g. after your request has been processed). Mandatory legal provisions - in particular legal retention periods - remain unaffected.</p>
      <h2>5. ANALYSIS TOOLS AND ADVERTISING</h2>
      <h3>GOOGLE ANALYTICS</h3>
      <p>This website uses functions of the web analytics service Google Analytics. The provider is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.</p>
      <p>Google Analytics enables the website operator to analyze the behavior of website visitors. In doing so, the website operator receives various usage data, such as page views, duration of visit, operating systems used and origin of the user. This data may be summarized by Google in a profile that is assigned to the respective user or their end device.</p>
      <p>Google Analytics uses technologies that enable the recognition of the user for the purpose of analyzing user behavior (e.g. cookies or device fingerprinting). The information collected by Google about the use of this website is usually transferred to a Google server in the USA and stored there.</p>
      <p>The use of this analysis tool is based on Art. 6 para. 1 lit. f DSGVO. The website operator has a legitimate interest in analyzing user behavior in order to optimize both its website and its advertising. If a corresponding consent has been requested (e.g. consent to store cookies), the processing is based exclusively on Art. 6 (1) a DSGVO; the consent can be revoked at any time.</p>
      <p>
        Data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here:{' '}
        <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener noreferrer">
          https://privacy.google.com/businesses/
        </a>
        .
      </p>
      <h4>IP anonymization</h4>
      <p>I have activated the IP anonymization function on this website. This means that your IP address is shortened by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area before being transmitted to the USA. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity and providing other services relating to website activity and internet usage to the website operator. The IP address transmitted by your browser as part of Google Analytics will not be merged with other data from Google.</p>
      <h4>Browser Plugin</h4>
      <p>
        You can prevent the collection and processing of your data by Google by downloading and installing the browser plugin available at the following link:{' '}
        <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">
          https://tools.google.com/dlpage/
        </a>
        .
      </p>
      <p>
        For more information on how Google Analytics handles user data, please see Google's privacy policy:{' '}
        <a href="https://support.google.com/analytics/answer/6004245?hl=en" target="_blank" rel="noopener noreferrer">
          https://support.google.com/analytics/
        </a>
        .
      </p>
      <h4>Job processing</h4>
      <p>I have concluded an job processing contract with Google and fully implement the strict requirements of the German data protection authorities when using Google Analytics.</p>
      <h4>Data retention</h4>
      <p>
        Data stored by Google at user and event level that is linked to cookies, user identifiers (e.g. User ID) or advertising IDs (e.g. DoubleClick cookies, Android advertising ID) is anonymized or deleted after 14 months. For details, please see the following link:{' '}
        <a href="https://support.google.com/analytics/answer/7667196?hl=en" target="_blank" rel="noopener noreferrer">
          https://support.google.com/analytics/
        </a>
      </p>
      <h3>FACEBOOK PIXEL</h3>
      <p>This website uses the visitor action pixel from Facebook for conversion measurement. The provider of this service is Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland. However, according to Facebook, the collected data is also transferred to the USA and other third countries.</p>
      <p>In this way, the behavior of page visitors can be tracked after they have been redirected to the provider's website by clicking on a Facebook ad. This allows the effectiveness of the Facebook ads to be evaluated for statistical and market research purposes and future advertising measures to be optimized.</p>
      <p>
        The collected data is anonymous for me as the operator of this website, I cannot draw any conclusions about the identity of the users. However, the data is stored and processed by Facebook, so that a connection to the respective user profile is possible and Facebook can use the data for its own advertising purposes, according to{' '}
        <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank" rel="noopener noreferrer">
          the Facebook data usage policy
        </a>
        . This allows Facebook to enable the placement of advertisements on Facebook pages as well as outside of Facebook. This use of the data cannot be influenced by me as the site operator.
      </p>
      <p>The use of Facebook Pixel is based on Art. 6 (1) lit. f DSGVO. The website operator has a legitimate interest in effective advertising measures including social media. If a corresponding consent has been requested (e.g. consent to store cookies), the processing is based exclusively on Art. 6 (1) lit. a DSGVO; the consent can be revoked at any time.</p>
      <p>
        Data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here:{' '}
        <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">
          https://www.facebook.com/legal/
        </a>{' '}
        and{' '}
        <a href="https://www.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">
          https://www.facebook.com/help/
        </a>
      </p>
      <h3>NEWSLETTER</h3>
      <p>If you have signed up for my newsletter with your email address, I will store and use your email address to send you my newsletter with information and advertising about me until you unsubscribe from my newsletter.</p>
      <p>For my newsletter service I use the newsletter service "Mailchimp" of Rocket Sience Group LLC, 675 Ponce de Leon Ave NE, Suite 5000 Atlanta, GA 30308.</p>
      <p>If you enter your e-mail address to receive the newsletter, it will initially be stored by MailChimp for the purpose of sending the owner an e-mail in which he/she can confirm the subscription to the newsletter mailing ("double opt-in"). After such confirmation, the email address is stored permanently at MailChimp until they have unsubscribed from receiving the newsletter or it is deleted by me. MailChimp stores the date of registration as well as the IP address under which the registration took place. A further use of their IP address does not take place.</p>
      <p>I would like to point out that the data collected and used via MailChimp is stored and processed on computers in the USA. With your consent to receive my newsletter, you agree to this. Furthermore, I have concluded a data processing contract with MailChimp based on the so-called EU standard contractual clauses. Your email address will not be passed on to third parties in any other way.</p>
      <p>You can unsubscribe from my newsletter at any time. In each email with my newsletter is an unsubscribe link. You can also at any time revoke your consent to the use of their email address for the future to me. To do so, please use the contact options above.</p>
    </>
  )

  return (
    <StyledImprintSection>
      <StyledImprintInner>{data}</StyledImprintInner>
    </StyledImprintSection>
  )
}

export default Policy
