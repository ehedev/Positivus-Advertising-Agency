import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import { 
  amazonLight, amazonDark, dribbbleLight, dribbbleDark,
  hubspot, notionLight, notionDark, netflix, zoom 
} from "../../imports/assets";

const logos = [
  { light: amazonLight, dark: amazonDark, alt: 'Amazon', url: 'https://www.amazon.com' },
  { light: dribbbleLight, dark: dribbbleDark, alt: 'Dribbble', url: 'https://dribbble.com' },
  { light: hubspot, dark: hubspot, alt: 'HubSpot', url: 'https://www.hubspot.com' },
  { light: notionLight, dark: notionDark, alt: 'Notion', url: 'https://www.notion.so' },
  { light: netflix, dark: netflix, alt: 'Netflix', url: 'https://www.netflix.com' },
  { light: zoom, dark: zoom, alt: 'Zoom', url: 'https://zoom.us' }
];

const Partners = () => {
  const { theme } = useTheme();

  return (
    <section className="partners-section py-5 text-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="col-4 col-md-2 mb-4 partners-logo">
              <a 
                href={logo.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={theme === "light" ? logo.light : logo.dark}
                  alt={logo.alt}
                  className="img-fluid partners-logo-img"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;