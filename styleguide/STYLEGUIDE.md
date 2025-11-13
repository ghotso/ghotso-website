GHOTSO STYLE GUIDE
==================

This document defines the full visual design language for the ghotso.dev portfolio website.  
All visual aspects must follow these rules to stay consistent with the logo and brand identity.

------------------------------------------------------------
1. BRAND AESTHETIC
------------------------------------------------------------
The brand identity is:
- neon cyberpunk meets clean developer aesthetic
- dark background with glowing accents
- playful, friendly, tech-inspired (like the >_< emoticon in the logo)

Overall mood:
- digital, futuristic, but friendly
- no corporate stiffness
- glowy, soft, modern

------------------------------------------------------------
2. COLOR PALETTE
------------------------------------------------------------

PRIMARY BRAND COLORS
--------------------
ghotso-primary:   #C8FF3D   (neon yellow-green of the “g”)  
ghotso-accent:    #3EDCFF   (glowing blue of the emoticon face)

BACKGROUND COLORS
-----------------
ghotso-bg:            #030712  
ghotso-bg-secondary:  #0B1120  
ghotso-panel:         #111827  

TEXT COLORS
-----------
ghotso-text:        #E5E7EB  
ghotso-text-muted:  #9CA3AF  

UTILITY COLORS (optional)
-------------------------
success:  #4ADE80  
warning:  #FACC15  
danger:   #F87171  

------------------------------------------------------------
3. TYPOGRAPHY
------------------------------------------------------------
Font family:
- Inter (primary)
- fallback: system-ui

Typography style:
- Titles: bold or extra-bold
- Body: regular
- Minimal letter spacing
- Clean, modern look
- Links or important actions may use a subtle neon underline/accent

------------------------------------------------------------
4. RADIUS / SHAPES
------------------------------------------------------------
Rounded shapes match the softness of the logo:

- Cards: rounded-2xl
- Panels: rounded-3xl allowed
- Buttons: rounded-xl or rounded-lg
- Inputs (if ever added): rounded-lg

------------------------------------------------------------
5. SPACING & LAYOUT
------------------------------------------------------------
Container max-width: 1100px

Section spacing:
- Mobile: py-16
- Desktop: py-24

Interior spacing:
- Cards: p-6 to p-8
- Panels: p-8

------------------------------------------------------------
6. GLOW / NEON EFFECTS
------------------------------------------------------------
Inspired by the logo glow.

Primary glow:
shadow-glow-primary:
  0 0 8px rgba(200,255,61,0.5),
  0 0 24px rgba(200,255,61,0.15)

Accent glow:
shadow-glow-accent:
  0 0 8px rgba(62,220,255,0.5),
  0 0 24px rgba(62,220,255,0.15)

Usage:
- Hover glows on primary buttons
- Soft glow around the logo when displayed large
- Accent glow for interactive elements (links, badges)

Don’t overuse. Subtle wins.

------------------------------------------------------------
7. BUTTON STYLE
------------------------------------------------------------

PRIMARY BUTTON
--------------
Background: ghotso-primary  
Text: black (#000000)  
Hover:
- slight glow (shadow-glow-primary)
- slight scale: 1.02  
- smooth transition (150–200ms)

SECONDARY BUTTON
----------------
Border: 1px solid rgba(62,220,255,0.3)  
Text: ghotso-accent  
Hover:
- accent glow (shadow-glow-accent)

------------------------------------------------------------
8. NAVIGATION BAR
------------------------------------------------------------

Navbar:
- Height ~72px
- Background: ghotso-panel
- Border-bottom: 1px solid rgba(255,255,255,0.05)
- Logo left, nav links right
- Active link: ghotso-primary color with slight glow

Language Switcher:
- Simple small buttons
- opacity-60 → opacity-100 on hover
- active language: ghotso-accent

Dark/Light Mode Toggle:
- smooth color transition

------------------------------------------------------------
9. PROJECT CARDS
------------------------------------------------------------
Each project card uses:
- Background: ghotso-panel
- Rounded corners (rounded-2xl)
- Padding: p-6 / p-8
- Title: ghotso-primary or white with accent underline
- Tech tags: outlined chips using accent color
- Status badge: colored, subtle glow acceptable

------------------------------------------------------------
10. TAILWIND CONFIG SNIPPET
------------------------------------------------------------
These values must be added to tailwind.config.js:

colors:
  'ghotso-primary': '#C8FF3D'
  'ghotso-accent': '#3EDCFF'
  'ghotso-bg': '#030712'
  'ghotso-bg-secondary': '#0B1120'
  'ghotso-panel': '#111827'
  'ghotso-text': '#E5E7EB'
  'ghotso-text-muted': '#9CA3AF'

boxShadow:
  'glow-primary': '0 0 8px rgba(200,255,61,0.5), 0 0 24px rgba(200,255,61,0.15)'
  'glow-accent': '0 0 8px rgba(62,220,255,0.5), 0 0 24px rgba(62,220,255,0.15)'

borderRadius:
  'xl': '1rem'
  '2xl': '1.5rem'
  '3xl': '2rem'

------------------------------------------------------------
END OF STYLE GUIDE
------------------------------------------------------------
