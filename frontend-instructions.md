# Frontend Instructions for AI Tasks

## Goal
Build the **frontend only** of each page **before** any backend functionality is added. Work in small, clean, reusable steps. Style and structure should follow the existing design system and components.

---

## 🔍 Step-by-Step Instructions

### 1. Review the Figma Design
- Look at the **provided screenshot or page in Figma** before writing any code.
- Understand the layout, spacing, typography, and component structure.
- Identify reusable patterns that match existing components.

### 2. Match the Existing Design System
Use only:
- **Fonts:** Same font stack as used in `index.css`.
- **Colors:** Stick to the defined color tokens or Tailwind utility classes used in previous components.
- **Button styles:** Use `.white-btn` or other existing button classes when applicable.
- **Spacing and layout:** Follow conventions seen in the homepage and header/footer.

### 3. Use Shared Layout Components
- Include the **existing header and footer** on every page.
- Wrap all new pages with any layout component already in use (e.g., `Layout.jsx` or `PageWrapper.jsx`, if available).

### 4. Create New Components
- Create React components for new sections or elements from the design.
- Name components clearly (e.g., `JobCard.jsx`, `SearchFilters.jsx`, etc.).
- Style them with Tailwind CSS or matching utility classes.
- Use semantic HTML when possible.

### 5. Get Approval Before Writing Code
- 🛑 **STOP and check with the user**:
  - Share a short summary/plan of the components you will create.
  - Mention how you will organize the layout and styling.
  - Wait for approval before writing or committing any code.

---

## ✅ Once Approved
After the plan is approved:
- Write small, focused components.
- Keep layout stable and responsive.
- Test in the browser before committing.
- Save a **checkpoint in the notes** after each completed page or major layout section.

---

## 📌 Notes & Checkpoints
- Always update the `AI Project Notes & Checkpoints.md` file after completing a new section.
- Include:
  - What was added or changed
  - Confirmation that it matches the Figma design
  - Whether header/footer/layout are consistent
  - Whether the result is responsive and stable

