function ContactSection() {
  const contacts = [
    {
      title: "Github",
      icon: "github_logo.svg",
      link: "https://github.com/LilNewton",
    },
    {
      title: "LinkedIn",
      icon: "linkedin_logo.svg",
      link: "https://www.linkedin.com/in/chris-john-borigas/",
    },
    {
      title: "Facebook",
      icon: "facebook_logo.svg",
      link: "https://www.facebook.com/cj.borigas",
    },
  ];
  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <a className="fade blur-frost" key={contact.title} href={contact.link}>
          <img
            className="contact__icon"
            src={
              new URL(`../assets/icons/${contact.icon}`, import.meta.url).href
            }
            alt={contact.title}
          />
        </a>
      ))}
    </div>
  );
}

export default ContactSection;
