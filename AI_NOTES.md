# AI Project Notes & Checkpoints

## About Me
- Designer with basic HTML/CSS knowledge, little JavaScript experience.
- Prefer short, simple explanations and step-by-step guidance.
- Like to save important decisions and code as notes for future reference.

## How We Work
- Go slow, explain things simply, and use small, focused code changes.
- Always save important decisions and code as notes for future reference.
- If anything breaks, we can revert to the last checkpoint.

---

## 🟢 Checkpoint Saved: White Button Refactor & Git Setup (July 2, 2024)

- **Git is now set up for local version control and checkpoints.**
- Created a reusable `.white-btn` class in `src/index.css` for all white buttons.
- Updated all white buttons (header, mobile menu, search bar) to use `.white-btn` plus their specific classes for unique tweaks.
- Confirmed the UI is working and nothing is broken after the refactor.
- You can now style all white buttons in one place and add extra styles as needed.

---

## 🟢 Previous Checkpoint: Responsive Header & Mobile Menu Tweaks (June 25, 2024)

### Project Overview
- **Project:** Job Board (React + Vite)
- **Your Role:** Designer with basic HTML/CSS knowledge, little JavaScript experience.
- **AI's Role:** Coding partner—explains things simply, works step-by-step, and uses small code snippets.
- **Planned:** Use Supabase for backend/database (not started yet—currently building only the frontend).

### Progress (as of this checkpoint)
- ✅ All homepage components styled for desktop.
- ✅ Responsive header with hamburger menu and overlay (now using thinner Feather icons).
- ✅ Mobile/tablet menu: "Employer account" is a dropdown with indented submenu items.
- ✅ Spacing for mobile menu links and buttons adjusted for clarity (16px vertical spacing).
- ✅ "View Job" button removed from header as per your design.
- ✅ All changes made in small, safe steps with clear explanations.

### Next Steps (when you're ready)
- Continue refining mobile responsiveness for other components (Hero, Search, etc.).
- Make the Footer responsive for smaller screens.
- Any other design tweaks or new features you want to add.

---

## 🧑‍💻 Team Workflow: Using Gemini CLI as a Backup
- Our main workflow is with Cursor (Gemini Pro) for code, explanations, and step-by-step help.
- Gemini CLI is set up as a "teammate" for second opinions or when we need extra help.
- **When to use Gemini CLI:**
  - If we try several fixes here and the problem isn't solved.
  - If you want a second opinion or a different approach.
  - If there's a feature or integration that Cursor can't do directly.
  - If you ask for a comparison or want to see another solution.
- I (Cursor) will let you know when it's a good time to ask Gemini CLI for help, and I'll help you phrase the question and use the answer.

---

## 🟢 Checkpoint Saved: Search Results Summary UI (July 3, 2024)

- **Added a placeholder search results summary and "Clear Search" button below the search bar, as per Figma design.**
- Created a new `SearchSummary` component and CSS for this UI.
- Matched the Figma: bold yellow summary text (no background), white outlined button, both on the same line, responsive.
- Ensured no layout or style breakage; committed a stable checkpoint.
- Updated workflow notes and kept code clean for future backend integration.

*Update this file with new checkpoints and notes as you go!*            

---

## 🟢 Checkpoint Saved: Employer Contracts Card & Button UI Fixes (July 4, 2024)

- Fixed the "View Applicants" button padding to match the "Edit posting" button by updating `.white-btn` with `padding: 12px 24px;` in `index.css`.
- Made `.contract-card` padding even on mobile (`padding: 16px;` for all sides) for a balanced look.
- Both changes confirmed working as intended on the Employer Contracts Page.
- No impact to other card components or buttons.

---

## 🔄 Updated Instructions for All New Frontend Pages (June 28, 2025)

We are now building **only the frontend of new pages**, based on Figma screenshots.

### New Process for Each Page:
- AI will **review the screenshot of the design first**.
- It will make a short plan outlining:
  - Which components will be built
  - How layout and styles will be applied
- AI must **run this plan by you first before writing any code**.
- All pages should:
  - Use the existing header and footer
  - Follow the same fonts, colors, and spacing
  - Use existing styles like `.white-btn` where relevant
- After building and testing the UI, the AI will update this file with a new checkpoint describing the work.

