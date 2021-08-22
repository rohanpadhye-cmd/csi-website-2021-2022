import { useState } from "react";

const iconStyle = (hover) => ({
    backgroundColor: hover ? "#363537" : "#add8e6",
    color: hover ? "#add8e6" : "#363537",
    padding: "1%",
    borderRadius: "50%",
    opacity: hover ? "1" : "0.9",
    transition: "500ms",
    marginLeft: "6px",
});

const IconBar = () => {

    const [instaHover, setInstaHover] = useState(false);
    const [mailHover, setMailHover] = useState(false);
    const [gitHover, setgitHover] = useState(false);
    const [linkdHover, setlinkdHover] = useState(false);

    return (
        <>
            <a 
            href="https://www.instagram.com/csi_vesit/?hl=en"
            target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#363537"
                fill="#add8e6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={iconStyle(instaHover)}
                onPointerOver={() => setInstaHover(true)}
                onPointerOut={() => setInstaHover(false)}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg></a>
            <a 
            href="mailto:csi.vesit@ves.ac.in"
            target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-forward"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#363537"
                fill="#add8e6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={iconStyle(mailHover)}
                onPointerOver={() => setMailHover(true)}
                onPointerOut={() => setMailHover(false)}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" />
                <path d="M15 18h6" />
                <path d="M18 15l3 3l-3 3" />
            </svg></a>
            <a 
            href="https://github.com/csi-ves-it/"
            target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-brand-github" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="#363537" 
                fill="#add8e6" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                style={iconStyle(gitHover)}
                onPointerOver={() => setgitHover(true)}
                onPointerOut={() => setgitHover(false)}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg></a>
            <a 
            href="https://www.linkedin.com/company/csi-vesit/"
            target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-brand-linkedin" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="#363537" 
                fill="#add8e6" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                style={iconStyle(linkdHover)}
                onPointerOver={() => setlinkdHover(true)}
                onPointerOut={() => setlinkdHover(false)}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg></a>
        </>
    );
}
 
export default IconBar;