const theme = {
    "borderWidths": {
        "border-lg": "0.625rem",
        "border-m": "0.3125rem",
        "border-ml": "0.375rem",
        "border-mlg": "0.5rem",
        "border-none": "0",
        "border-s": "0.19rem",
        "border-xs": "0.125rem",
        "border-xxs": "0.0625rem",
        "medium": "0.19rem",
        "thick": "0.3125rem",
        "thin": "0.0625rem"
    },
    "borders": {
        "border-avatar": "{*borderWidths.border-xxs} solid {*colors.black}",
        "border-button-outline": "{*borderWidths.border-xxs} solid {*colors.black}",
        "border-button-outline-hover": "{*borderWidths.border-xxs} solid {*colors.greyDark}",
        "border-discount": "{*borderWidths.border-xxs} solid {*colors.globalColorDiscount}",
        "border-dropdown": "{*borderWidths.border-xxs} solid {*colors.greyLight}",
        "border-error": "{*borderWidths.border-xxs} solid {*colors.globalColorError}",
        "border-form-checkbox-disabled": "{*borderWidths.border-xxs}  solid {*colors.grey}",
        "border-form-checkbox-error": "{*borderWidths.border-xxs}  solid {*colors.globalColorError}",
        "border-form-checkbox-resting": "{*borderWidths.border-xxs}  solid {*colors.black}",
        "border-form-input-disabled": "{*borderWidths.border-xxs}  solid {*colors.grey}",
        "border-form-input-error": "{*borderWidths.border-xxs}  solid {*colors.globalColorError}",
        "border-form-input-resting": "{*borderWidths.border-xxs}  solid {*colors.greyDark}",
        "border-form-input-selected": "{*borderWidths.border-xxs}  solid {*colors.black}",
        "border-form-radio-disabled": "{*borderWidths.border-xxs} solid {*colors.grey}",
        "border-form-radio-error": "{*borderWidths.border-xxs} solid {*colors.globalColorError}",
        "border-form-radio-resting": "{*borderWidths.border-xxs} solid {*colors.black}",
        "border-form-select-disabled": "{*borderWidths.border-xxs}  solid {*colors.grey}",
        "border-form-select-error": "{*borderWidths.border-xxs} solid {*colors.globalColorError}",
        "border-form-select-resting": "{*borderWidths.border-xxs}  solid {*colors.greyDark}",
        "border-form-select-selected": "{*borderWidths.border-xxs} solid {*colors.black}",
        "border-form-textarea-disabled": "{*borderWidths.border-xxs} solid {*colors.grey}",
        "border-form-textarea-error": "{*borderWidths.border-xxs} solid {*colors.globalColorError}",
        "border-form-textarea-resting": "{*borderWidths.border-xxs} solid {*colors.greyDark}",
        "border-form-textarea-selected": "{*borderWidths.border-xxs} solid {*colors.black}",
        "border-informative": "{*borderWidths.border-xxs} solid {*colors.greyLight}",
        "border-institute": "0.438rem double black",
        "border-large-greyXlight": "0.6rem solid {*colors.greyXlight}",
        "border-large-transparent": "0.6rem solid transparent",
        "border-lg-black": "{*borderWidths.border-lg} solid black",
        "border-lg-greyXlight": "{*borderWidths.border-lg} solid {*colors.greyXlight}",
        "border-lg-transparent": "{*borderWidths.border-lg} solid transparent",
        "border-lg-white": "{*borderWidths.border-lg} solid white",
        "border-link-body-hover": "border-thin-brandColorPrimary",
        "border-m-black": "{*borderWidths.border-m} solid black",
        "border-m-white": "{*borderWidths.border-m} solid white",
        "border-med-brand-quaternary": "0.25rem solid {*colors.brandColorQuaternary}",
        "border-medium-black": "medium solid black",
        "border-medium-grey": "medium solid {*colors.grey}",
        "border-medium-white": "medium solid white",
        "border-ml-black": "{*borderWidths.border-ml} solid black",
        "border-mlg-black": "{*borderWidths.border-mlg} solid black",
        "border-mlg-grey": "{*borderWidths.border-mlg} solid {*colors.grey}",
        "border-none-transparent": "{*borderWidths.border-none} solid transparent",
        "border-rating": "{*borderWidths.border-xxs} solid {*colors.globalColorRating}",
        "border-s-black": "{*borderWidths.border-s} solid black",
        "border-s-white": "{*borderWidths.border-s} solid white",
        "border-slider-range": "border-xxs-black",
        "border-slider-range-disabled": "border-xxs-greyXlight",
        "border-slider-thumb": "border-xxs-grey",
        "border-slider-thumb-disabled": "border-xxs-greyXlight",
        "border-slider-track": "border-xxs-grey",
        "border-slider-track-disabled": "border-xxs-greyXlight",
        "border-thin-black": "thin solid black",
        "border-thin-dashed-black": "thin dashed black",
        "border-thin-grey": "thin solid {*colors.grey}",
        "border-thin-greyDark": "thin solid {*colors.greyDark}",
        "border-thin-greyLight": "thin solid {*colors.greyLight}",
        "border-thin-greyXXXdark": "thin solid {*colors.greyXXXdark}",
        "border-thin-greyXXdark": "thin solid {*colors.greyXXdark}",
        "border-thin-greyXdark": "thin solid {*colors.greyXdark}",
        "border-thin-greyXlight": "thin solid {*colors.greyXlight}",
        "border-thin-transparent": "thin solid transparent",
        "border-thin-white": "thin solid white",
        "border-xs-black": "{*borderWidths.border-xs} solid black",
        "border-xs-brand-quinary": "{*borderWidths.border-xs} solid {*colors.brandColorQuinary}",
        "border-xs-grey": "{*borderWidths.border-xs} solid {*colors.grey}",
        "border-xs-transparent": "{*borderWidths.border-xs} solid transparent",
        "border-xs-white": "{*borderWidths.border-xs} solid white",
        "border-xxs-black": "{*borderWidths.border-xxs} solid black",
        "border-xxs-brand-secondary": "{*borderWidths.border-xxs} solid {*colors.brandColorSecondary}",
        "border-xxs-dotted-black": "{*borderWidths.border-xxs} dotted black",
        "border-xxs-grey": "{*borderWidths.border-xxs} solid {*colors.grey}",
        "border-xxs-greyDark": "{*borderWidths.border-xxs} solid {*colors.greyDark}",
        "border-xxs-greyLight": "{*borderWidths.border-xxs} solid {*colors.greyLight}",
        "border-xxs-greyXXXdark": "{*borderWidths.border-xxs} solid {*colors.greyXXXdark}",
        "border-xxs-greyXXdark": "{*borderWidths.border-xxs} solid {*colors.greyXXdark}",
        "border-xxs-greyXdark": "{*borderWidths.border-xxs} solid {*colors.greyXdark}",
        "border-xxs-greyXlight": "{*borderWidths.border-xxs} solid {*colors.greyXlight}",
        "border-xxs-transparent": "{*borderWidths.border-xxs} solid transparent",
        "border-xxs-white": "{*borderWidths.border-xxs} solid white",
        "button-border-thin": "thin solid",
        "offer-card-selected-border": "thin solid {*colors.grey}"
    },
    "colors": {
        "amber-100": "#FEF3C7",
        "amber-200": "#FDE68A",
        "amber-300": "#FCD34D",
        "amber-400": "#FBBF24",
        "amber-50": "#FFFBEB",
        "amber-500": "#F59E0B",
        "amber-600": "#D97706",
        "amber-700": "#B45309",
        "amber-800": "#92400E",
        "amber-900": "#78350F",
        "amber-950": "#431407",
        "bg-avatar": "white",
        "bg-avatar-hover": "black",
        "bg-block-big-story": "",
        "bg-block-big-story-feed": "",
        "bg-block-content-big-story": "",
        "bg-block-content-big-story-feed": "",
        "bg-block-content-big-story-feed-colright-basefeed": "",
        "bg-block-content-big-story-feed-colright-feature": "",
        "bg-block-content-big-story-feed-noimage-basefeed": "",
        "bg-block-content-big-story-feed-noimage-feature": "",
        "bg-block-content-big-story-feed-stacked-basefeed": "",
        "bg-block-content-big-story-feed-stacked-feature": "",
        "bg-block-content-big-story-imageright": "",
        "bg-block-content-big-story-imageright-ad": "",
        "bg-block-content-big-story-noimage": "",
        "bg-block-content-big-story-noimage-ad": "",
        "bg-block-content-big-story-under": "",
        "bg-block-content-big-story-under-ad": "",
        "bg-block-content-four-across": "",
        "bg-block-content-text": "",
        "bg-block-content-three-col": "",
        "bg-block-four-across": "",
        "bg-block-three-col": "",
        "bg-chip-base": "greyXlight",
        "bg-chip-base-disabled": "greyLight",
        "bg-chip-button": "black",
        "bg-chip-button-hover": "greyXdark",
        "bg-color-do-not-sell-hover": "grey",
        "bg-color-poll-bar": "greyLight",
        "bg-discount": "globalColorDiscount",
        "bg-discount-onDark": "globalColorDiscount-OnDark",
        "bg-droppdown-list": "white",
        "bg-droppdown-list-first": "greyLight",
        "bg-droppdown-list-hover": "greyXlight",
        "bg-error": "globalColorError",
        "bg-error-onDark": "globalColorError-OnDark",
        "bg-form-check-disabled": "greyXlight",
        "bg-form-check-resting": "white",
        "bg-form-check-selected": "black",
        "bg-form-input-disabled": "greyXlight",
        "bg-form-input-resting": "white",
        "bg-form-input-selected": "white",
        "bg-informative": "greyLight",
        "bg-informative-onDark": "greyXXXdark",
        "bg-legal": "greyLight",
        "bg-legal-onDark": "greyXXXdark",
        "bg-rating": "globalColorRating",
        "bg-rating-onDark": "globalColorRating-OnDark",
        "bg-slider-range": "black",
        "bg-slider-range-disabled": "greyXlight",
        "bg-slider-thumb": "white",
        "bg-slider-thumb-disabled": "white",
        "bg-slider-track": "white",
        "bg-slider-track-disabled": "white",
        "black": "#000000",
        "blue-100": "#DBEAFE",
        "blue-200": "#BFDBFE",
        "blue-300": "#93C5FD",
        "blue-400": "#60A5FA",
        "blue-50": "#EFF6FF",
        "blue-500": "#3B82F6",
        "blue-600": "#2563EB",
        "blue-700": "#1D4ED8",
        "blue-800": "#1E40AF",
        "blue-900": "#1E3A8A",
        "blue-950": "#172554",
        "brandColorPrimary": "#9e3326",
        "brandColorQuaternary": "#d24432",
        "brandColorQuinary": "#125C68",
        "brandColorSecondary": "#198294",
        "brandColorSenary": "#53c2be",
        "brandColorTertiary": "#F8F3F4",
        "breaker-ad-border": "greyLight",
        "color-link-body-hover": "greyXXdark",
        "color-rating-default": "#F3B032",
        "color-star-rating-default": "#53c2be",
        "cyan-100": "#CFFAFE",
        "cyan-200": "#A5F3FC",
        "cyan-300": "#67E8F9",
        "cyan-400": "#22D3EE",
        "cyan-50": "#ECFEFF",
        "cyan-500": "#06B6D4",
        "cyan-600": "#0891B2",
        "cyan-700": "#0E7490",
        "cyan-800": "#155E75",
        "cyan-900": "#164E63",
        "cyan-950": "#083344",
        "emerald-100": "#D1FAE5",
        "emerald-200": "#A7F3D0",
        "emerald-300": "#6EE7B7",
        "emerald-400": "#34D399",
        "emerald-50": "#ECFDF5",
        "emerald-500": "#10B981",
        "emerald-600": "#059669",
        "emerald-700": "#047857",
        "emerald-800": "#065F46",
        "emerald-900": "#064E3B",
        "emerald-950": "#022C22",
        "fg-discount": "globalColorDiscount",
        "fg-discount-onDark": "globalColorDiscount-OnDark",
        "fg-error": "globalColorError",
        "fg-error-onDark": "globalColorError-OnDark",
        "footer-fill": "black",
        "footer-network-fill": "white",
        "footerbgColor": "white",
        "fuchsia-100": "#FAE8FF",
        "fuchsia-200": "#F5D0FE",
        "fuchsia-300": "#F0ABFC",
        "fuchsia-400": "#E879F9",
        "fuchsia-50": "#FDF4FF",
        "fuchsia-500": "#D946EF",
        "fuchsia-600": "#C026D3",
        "fuchsia-700": "#A21CAF",
        "fuchsia-800": "#86198F",
        "fuchsia-900": "#701A75",
        "fuchsia-950": "#4A044E",
        "globalColorDiscount": "brandColorQuinary",
        "globalColorDiscount-OnDark": "greenLight",
        "globalColorError": "red",
        "globalColorError-OnDark": "redLight",
        "globalColorFocus": "black",
        "globalColorFocus-OnDark": "white",
        "globalColorInformative": "greyXXXdark",
        "globalColorInformative-OnDark": "greyXlight",
        "globalColorLegal": "greyXXXdark",
        "globalColorLegal-OnDark": "greyXlight",
        "globalColorRating": "yellow",
        "globalColorRating-OnDark": "yellowLight",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-50": "#F9FAFB",
        "gray-500": "#6B7280",
        "gray-600": "#4B5563",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
        "gray-900": "#111827",
        "gray-950": "#030712",
        "green-100": "#DCFCE7",
        "green-200": "#BBF7D0",
        "green-300": "#86EFAC",
        "green-400": "#4ADE80",
        "green-50": "#F0FDF4",
        "green-500": "#22C55E",
        "green-600": "#16A34A",
        "green-700": "#15803D",
        "green-800": "#166534",
        "green-900": "#14532D",
        "green-950": "#052E16",
        "greenDark": "#006603",
        "greenLight": "#75C278",
        "grey": "neutral-300",
        "greyDark": "neutral-400",
        "greyLight": "neutral-200",
        "greyXXXdark": "neutral-800",
        "greyXXdark": "neutral-600",
        "greyXdark": "neutral-500",
        "greyXlight": "neutral-100",
        "indigo-100": "#E0E7FF",
        "indigo-200": "#C7D2FE",
        "indigo-300": "#A5B4FC",
        "indigo-400": "#818CF8",
        "indigo-50": "#EEF2FF",
        "indigo-500": "#6366F1",
        "indigo-600": "#4F46E5",
        "indigo-700": "#4338CA",
        "indigo-800": "#3730A3",
        "indigo-900": "#312E81",
        "indigo-950": "#1E1B4B",
        "lime-100": "#ECFCCB",
        "lime-200": "#D9F99D",
        "lime-300": "#BEF264",
        "lime-400": "#A3E635",
        "lime-50": "#F7FEE7",
        "lime-500": "#84CC16",
        "lime-600": "#65A30D",
        "lime-700": "#4D7C0F",
        "lime-800": "#3F6212",
        "lime-900": "#365314",
        "lime-950": "#1A2E05",
        "link-block-header": "black",
        "link-hover-block-header": "brandColorPrimary",
        "link-hover-item-title-primary": "brandColorPrimary",
        "link-hover-item-title-secondary": "brandColorSecondary",
        "link-hover-three-column-heading": "brandColorPrimary",
        "link-three-column-heading": "brandColorPrimary",
        "location-choice-menu-bg": "black",
        "nav-subscribe-link-focus": "black",
        "neutral-100": "#F5F5F5",
        "neutral-200": "#E5E5E5",
        "neutral-300": "#D4D4D4",
        "neutral-400": "#A3A3A3",
        "neutral-50": "#FAFAFA",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "orange-100": "#FFEDD5",
        "orange-200": "#FED7AA",
        "orange-300": "#FDBA74",
        "orange-400": "#FB923C",
        "orange-50": "#FFF7ED",
        "orange-500": "#F97316",
        "orange-600": "#EA580C",
        "orange-700": "#C2410C",
        "orange-800": "#9A3412",
        "orange-900": "#7C2D12",
        "orange-950": "#431407",
        "pink-100": "#FCE7F3",
        "pink-200": "#FBCFE8",
        "pink-300": "#F9A8D4",
        "pink-400": "#F472B6",
        "pink-50": "#FDF2F8",
        "pink-500": "#EC4899",
        "pink-600": "#DB2777",
        "pink-700": "#BE185D",
        "pink-800": "#9D174D",
        "pink-900": "#831843",
        "pink-950": "#500724",
        "purple-100": "#F3E8FF",
        "purple-200": "#E9D5FF",
        "purple-300": "#D8B4FE",
        "purple-400": "#C084FC",
        "purple-50": "#FAF5FF",
        "purple-500": "#A855F7",
        "purple-600": "#9333EA",
        "purple-700": "#7E22CE",
        "purple-800": "#6B21A8",
        "purple-900": "#581C87",
        "purple-950": "#3B0764",
        "red": "#AA0703",
        "red-100": "#FEE2E2",
        "red-200": "#FECACA",
        "red-300": "#FCA5A5",
        "red-400": "#F87171",
        "red-50": "#FEF2F2",
        "red-500": "#EF4444",
        "red-600": "#DC2626",
        "red-700": "#B91C1C",
        "red-800": "#991B1B",
        "red-900": "#7F1D1D",
        "red-950": "#450A0A",
        "redLight": "#F0908E",
        "rose-100": "#FFE4E6",
        "rose-200": "#FECDD3",
        "rose-300": "#FDA4AF",
        "rose-400": "#FB7185",
        "rose-50": "#FFF1F2",
        "rose-500": "#F43F5E",
        "rose-600": "#E11D48",
        "rose-700": "#BE123C",
        "rose-800": "#9F1239",
        "rose-900": "#881337",
        "rose-950": "#4C0519",
        "saved-menu-panel-focus-link-bg": "greyXlight",
        "side-panel-menu-bg": "#f9b9b6",
        "side-panel-menu-link": "black",
        "side-panel-sub-menu-bg": "#f9b9b6",
        "side-panel-sub-menu-focus": "white",
        "side-panel-sub-menu-hover": "#fde6e5",
        "sidePanelLinkColor": "black",
        "sidePanelLinkColor-hover": "brandColorPrimary",
        "sidepanel-bg": "#fde6e5",
        "sidepanel-text": "black",
        "sky-100": "#E0F2FE",
        "sky-200": "#BAE6FD",
        "sky-300": "#7DD3FC",
        "sky-400": "#38BDF8",
        "sky-50": "#F0F9FF",
        "sky-500": "#0EA5E9",
        "sky-600": "#0284C7",
        "sky-700": "#0369A1",
        "sky-800": "#075985",
        "sky-900": "#0C4A6E",
        "sky-950": "#082F49",
        "slate-100": "#F1F5F9",
        "slate-200": "#E2E8F0",
        "slate-300": "#CBD5E1",
        "slate-400": "#94A3B8",
        "slate-50": "#F8FAFC",
        "slate-500": "#64748B",
        "slate-600": "#475569",
        "slate-700": "#334155",
        "slate-800": "#1E293B",
        "slate-900": "#0F172A",
        "slate-950": "#020617",
        "sponsor-bar-bg": "white",
        "stone-100": "#F5F5F4",
        "stone-200": "#E7E5E4",
        "stone-300": "#D6D3D1",
        "stone-400": "#A8A29E",
        "stone-50": "#FAFAF9",
        "stone-500": "#78716C",
        "stone-600": "#57534E",
        "stone-700": "#44403C",
        "stone-800": "#292524",
        "stone-900": "#1C1917",
        "stone-950": "#0C0A09",
        "teal-100": "#CCFBF1",
        "teal-200": "#99F6E4",
        "teal-300": "#5EEAD4",
        "teal-400": "#2DD4BF",
        "teal-50": "#F0FDFA",
        "teal-500": "#14B8A6",
        "teal-600": "#0D9488",
        "teal-700": "#0F766E",
        "teal-800": "#115E59",
        "teal-900": "#134E4A",
        "teal-950": "#042F2E",
        "text-avatar": "black",
        "text-avatar-hover": "white",
        "text-chip-label": "black",
        "text-chip-label-disabled": "greyDark",
        "text-discount": "globalColorDiscount",
        "text-discount-onDark": "globalColorDiscount-OnDark",
        "text-droppdown-list": "black",
        "text-droppdown-list-first": "black",
        "text-droppdown-list-hover": "black",
        "text-error": "globalColorError",
        "text-error-onDark": "globalColorError-OnDark",
        "text-form-disabled": "greyDark",
        "text-form-error": "globalColorError",
        "text-form-helper": "greyXdark",
        "text-form-label": "greyXXXdark",
        "text-form-placeholder": "greyXXXdark",
        "text-informative": "greyXXXdark",
        "text-informative-onDark": "white",
        "text-legal": "greyXXXdark",
        "text-legal-onDark": "white",
        "text-rating": "greyXXXdark",
        "text-rating-onDark": "greyLight",
        "textFillColor": "white",
        "violet-100": "#EDE9FE",
        "violet-200": "#DDD6FE",
        "violet-300": "#C4B5FD",
        "violet-400": "#A78BFA",
        "violet-50": "#F5F3FF",
        "violet-500": "#8B5CF6",
        "violet-600": "#7C3AED",
        "violet-700": "#6D28D9",
        "violet-800": "#5B21B6",
        "violet-900": "#4C1D95",
        "violet-950": "#2E1065",
        "white": "#ffffff",
        "yellow": "#F3B032",
        "yellow-100": "#FEF9C3",
        "yellow-200": "#FEF08A",
        "yellow-300": "#FDE047",
        "yellow-400": "#FACC15",
        "yellow-50": "#FEFCE8",
        "yellow-500": "#EAB308",
        "yellow-600": "#CA8A04",
        "yellow-700": "#A16207",
        "yellow-800": "#854D0E",
        "yellow-900": "#713F12",
        "yellow-950": "#422006",
        "yellowLight": "#F9D187",
        "zinc-100": "#F4F4F5",
        "zinc-200": "#E4E4E7",
        "zinc-300": "#D4D4D8",
        "zinc-400": "#A1A1AA",
        "zinc-50": "#FAFAFA",
        "zinc-500": "#71717A",
        "zinc-600": "#52525B",
        "zinc-700": "#3F3F46",
        "zinc-800": "#27272A",
        "zinc-900": "#18181B",
        "zinc-950": "#09090B",
    },
    "elevation": {
        "base": "0",
        "drawer": "8000000",
        "floating": "12000000",
        "gate": "14000000",
        "nav": "6000000",
        "overlay": "10000000",
        "raised": "2000000",
        "subnav": "4000000",
        "sunken": "-2000000"
    },
    "fontFamilies": {
        "Archer": {
            "src": [
                "static/fonts/ArcherSSm-Medium_Web.woff2",
                {
                    "defaults": false
                }
            ]
        },
        "Charter": {
            "src": [
                "static/fonts/e38fddd1-89a4-4995-9f7f-3c701b2e62f1.woff2",
                {
                    "defaults": false
                }
            ],
            "variants": {
                "style:italic": {
                    "src": "static/fonts/e4fc2e26-0ce1-4e6c-bb35-330c133f041c.woff2"
                },
                "weight:bold": {
                    "src": "static/fonts/74c2aebb-af4a-4c7d-a7f5-2db2c73334eb.woff2"
                }
            }
        },
        "CharterBold": {
            "src": [
                "static/fonts/74c2aebb-af4a-4c7d-a7f5-2db2c73334eb.woff2",
                {
                    "defaults": false
                }
            ],
            "variants": {
                "style:italic": {
                    "src": "static/fonts/8d8c24cd-7112-47d5-9f8d-a9063ad51341.woff2"
                }
            }
        },
        "Inter": {
            "src": [
                "static/fonts/inter-v3-latin-regular.woff2",
                {
                    "defaults": false
                }
            ],
            "variants": {
                "weight:700": {
                    "src": "static/fonts/inter-v3-latin-700.woff2"
                }
            }
        },
        "MajestiBanner": {
            "src": [
                "static/fonts/majestibannerbook-webfont.woff2",
                {
                    "defaults": false
                }
            ],
            "variants": {
                "weight:bold": {
                    "src": "static/fonts/majestibannerbold-webfont.woff2"
                }
            }
        },
        "Neutra": {
            "src": [
                "static/fonts/Neutra2Text_book.woff2",
                {
                    "defaults": false
                }
            ],
            "variants": {
                "weight:bold": {
                    "src": "static/fonts/Neutra2Text_bold.woff2"
                }
            }
        },
        "NeutraDisplay": {
            "src": [
                "static/fonts/Neutra2Display-Titling-Lining.woff2",
                {
                    "defaults": false
                }
            ]
        }
    },
    "fontSettings": {
        "base": "0.7"
    },
    "fontSizes": {
        "font-size-11": "0.001",
        "font-size-112": "5.67887",
        "font-size-12": "0.170157",
        "font-size-13": "0.36758",
        "font-size-14": "0.55034",
        "font-size-15": "0.72049",
        "font-size-16": "0.879669",
        "font-size-17": "1.02919",
        "font-size-18": "1.17016",
        "font-size-19": "1.3035",
        "font-size-20": "1.43",
        "font-size-21": "1.55034",
        "font-size-22": "1.66507",
        "font-size-23": "1.7747",
        "font-size-24": "1.87967",
        "font-size-25": "1.98035",
        "font-size-26": "2.07708",
        "font-size-27": "2.17016",
        "font-size-28": "2.25985",
        "font-size-29": "2.3464",
        "font-size-30": "2.43001",
        "font-size-31": "2.51088",
        "font-size-32": "2.58918",
        "font-size-33": "2.66507",
        "font-size-34": "2.7387",
        "font-size-35": "2.81019",
        "font-size-36": "2.87967",
        "font-size-37": "2.94724",
        "font-size-38": "3.01301",
        "font-size-39": "3.07708",
        "font-size-40": "3.13952",
        "font-size-41": "3.20042",
        "font-size-42": "3.25985",
        "font-size-43": "3.31788",
        "font-size-44": "3.37458",
        "font-size-45": "3.43001",
        "font-size-46": "3.48422",
        "font-size-47": "3.53726",
        "font-size-48": "3.58918",
        "font-size-49": "3.64003",
        "font-size-50": "3.68986",
        "font-size-52": "3.78659",
        "font-size-54": "3.87967",
        "font-size-56": "3.96936",
        "font-size-58": "4.05591",
        "font-size-60": "4.13952",
        "font-size-62": "4.22039",
        "font-size-64": "4.29869",
        "font-size-70": "4.5197",
        "font-size-80": "4.84903",
        "font-size-96": "5.29869"
    },
    "fonts": {
        "AdTextPrimary": "Inter, Helvetica, Arial, Sans-serif",
        "AdTextSecondary": "BylinePrimary",
        "BodyPrimary": "Charter, Georgia, Times, Serif",
        "BodySanSerif": "Inter, Helvetica, Arial, Sans-serif",
        "BodySecondary": "CharterBold, Georgia, Times, Serif",
        "BodyTertiary": "CharterItalic, Georgia, Times, Serif",
        "BylinePrimary": "secondary",
        "BylineSecondary": "primary",
        "DekPrimary": "primary",
        "DekSecondary": "primary",
        "HeadlinePrimary": "tertiary",
        "HeadlineSecondary": "primary",
        "LabelPrimary": "tertiary",
        "LabelSecondary": "primary",
        "MenuPrimary": "primary",
        "MenuSecondary": "primary",
        "SubheadlinePrimary": "tertiary",
        "SubheadlineSecondary": "primary",
        "TitlePrimary": "quaternary",
        "TitleSecondary": "primary",
        "primary": "Archer, Georgia, Times, Serif",
        "quaternary": "MajestiBanner, Georgia, Times, Serif",
        "secondary": "Neutra, Helvetica, Arial, Sans-serif",
        "tertiary": "NeutraDisplay, Helvetica, Arial, sans-serif"
    },
    "letterSpacings": {
        "letter-spacing-1": "0.0075rem",
        "letter-spacing-10": "0.075rem",
        "letter-spacing-2": "0.015rem",
        "letter-spacing-20": "0.15rem",
        "letter-spacing-3": "0.0225rem",
        "letter-spacing-30": "0.3rem",
        "letter-spacing-4": "0.03rem",
        "letter-spacing-40": "0.4rem",
        "letter-spacing-5": "0.0375rem",
        "letter-spacing-6": "0.045rem",
        "letter-spacing-8": "0.06rem",
        "letter-spacing-base": "0",
        "letter-spacing-n1": "-0.0075rem",
        "letter-spacing-n10": "-0.075rem",
        "letter-spacing-n2": "-0.015rem",
        "letter-spacing-n3": "-0.0225rem",
        "letter-spacing-n4": "-0.03rem",
        "letter-spacing-n5": "-0.0375rem",
        "letter-spacing-n6": "-0.045rem",
        "letter-spacing-n8": "-0.06rem"
    },
    "lineHeights": {
        "large": "1.5",
        "lg": "1.4",
        "lineheight-base": "1",
        "lineheight-lg": "1.4",
        "lineheight-max": "2",
        "lineheight-md": "1.3",
        "lineheight-sm": "1.2",
        "lineheight-xlg": "1.5",
        "lineheight-xs": "1.1",
        "lineheight-xsmall": "0.9",
        "lineheight-xxlg": "1.6",
        "lineheight-xxsmall": "0.8",
        "lineheight-xxxlg": "1.8",
        "md": "1.3",
        "medium": "1.3",
        "normal": {
            "minLinePadding": "5",
            "roundToNearestHalfLine": "false",
            "size": "10"
        },
        "sm": "1.2",
        "small": "1.2",
        "xlg": "1.5",
        "xs": "1.1",
        "xxs": "1"
    },
    "outlines": {
        "outline-focus-black": "{*sizes.outlineWidths.outline-xs} dotted {*colors.black}",
        "outline-focus-transparent": "{*sizes.outlineWidths.outline-xs} dotted transparent",
        "outline-focus-white": "{*sizes.outlineWidths.outline-xs} dotted {*colors.white}"
    },
    "radii": {
        "l": "1.875rem",
        "m": "1.25rem",
        "s": "0.9375rem",
        "xl": "4.375rem",
        "xs": "0.625rem",
        "xxs": "0.3125rem",
        "xxxs": "0.25rem"
    },
    "scaleRatio": 1.5,
    "shadows": {
        "shadow-grey": "0 0.188rem 0.188rem rgba(0, 0, 0, 0.2)",
        "shadow-greyXdark": "0 0.063rem 0.063rem rgba(0, 0, 0, 0.25)",
        "shadow-modal": "0 0.2rem 0.6rem rgba(0, 0, 0, 0.1)"
    },
    "sizes": {
        "footer-network-logo": {
            "height": "41",
            "width": "192"
        },
        "iconSize": {
            "l": "1.875rem",
            "m": "1.5rem",
            "s": "1.25rem",
            "xl": "2.5rem",
            "xs": "1.063rem",
            "xxl": "3.125rem",
            "xxs": "1rem",
            "xxxl": "3.75rem",
            "xxxs": "0.5rem",
            "xxxxl": "4.6rem",
            "xxxxxl": "5rem"
        },
        "maxContentWidth": "75rem",
        "navHeight": "3.375rem",
        "outlineOffset": {
            "outline-offset-lg": "0.5rem",
            "outline-offset-m": "0.375rem",
            "outline-offset-none": "0",
            "outline-offset-s": "0.25rem",
            "outline-offset-xs": "0.125rem",
            "outline-offset-xxs": "0.0625rem"
        },
        "outlineWidths": {
            "outline-lg": "0.625rem",
            "outline-m": "0.3125rem",
            "outline-none": "0",
            "outline-s": "0.19rem",
            "outline-xs": "0.125rem",
            "outline-xxs": "0.0625rem"
        },
        "primitive-0": "0rem",
        "primitive-1": "0.0625rem",
        "primitive-10": "0.625rem",
        "primitive-1024": "64rem",
        "primitive-11": "0.6875rem",
        "primitive-112": "7rem",
        "primitive-12": "0.75rem",
        "primitive-128": "8rem",
        "primitive-1280": "80rem",
        "primitive-13": "0.8125rem",
        "primitive-14": "0.875rem",
        "primitive-15": "0.9375rem",
        "primitive-16": "1rem",
        "primitive-160": "10rem",
        "primitive-1600": "100rem",
        "primitive-17": "1.0625rem",
        "primitive-18": "1.125rem",
        "primitive-19": "1.125rem",
        "primitive-192": "12rem",
        "primitive-1920": "120rem",
        "primitive-2": "0.125rem",
        "primitive-20": "1.25rem",
        "primitive-22": "1.375rem",
        "primitive-224": "14rem",
        "primitive-24": "1.5rem",
        "primitive-256": "16rem",
        "primitive-28": "1.75rem",
        "primitive-32": "2rem",
        "primitive-320": "20rem",
        "primitive-36": "2.25rem",
        "primitive-384": "24rem",
        "primitive-4": "0.25rem",
        "primitive-40": "2.5rem",
        "primitive-44": "2.75rem",
        "primitive-448": "28rem",
        "primitive-48": "3rem",
        "primitive-512": "32rem",
        "primitive-52": "3.25rem",
        "primitive-56": "3.5rem",
        "primitive-6": "0.375rem",
        "primitive-60": "3.75rem",
        "primitive-64": "4rem",
        "primitive-640": "40rem",
        "primitive-72": "4.5rem",
        "primitive-768": "48rem",
        "primitive-8": "0.5rem",
        "primitive-80": "5rem",
        "primitive-96": "6rem"
    },
    "space": {
        "2xs": "0.25rem",
        "center": "0 auto",
        "contentWidth": "75rem",
        "l": "1.875rem",
        "m": "1.25rem",
        "maxContentWidth": "75rem",
        "maxContentWidthAd": "25rem",
        "mobile-gutter": "0.938rem",
        "mobileOuterGutter": "0.938rem",
        "s": "0.9375rem",
        "tablet-gutter": "2.5rem",
        "tabletOuterGutter": "2.5rem",
        "xl": "4.375rem",
        "xs": "0.625rem",
        "xxs": "0.3125rem",
        "xxxs": "0.25rem"
    },
    "styles": {
        "404-error-link": {
            "variant": "body-primary"
        },
        "404-error-title": {
            "variant": "headline-primary"
        },
        "accordion-wrapper": {
            "borderBottom": "border-thin-grey"
        },
        "account-dropdown-container": {
            "pr": {
                "_": "0",
                "sm:xxlg": "2.5rem",
                "xxxlg>": "0"
            }
        },
        "account-dropdown-links": {
            "&:hover": {
                "textDecoration": "underline",
                "textDecorationThickness": "0.0625rem",
                "textUnderlineOffset": "0.25rem"
            },
            "bg": "white",
            "transition": "outline 0.3s ease-in-out, outline-offset 0.3s ease-in-out",
            "variant": "button-secondary"
        },
        "account-dropdown-menu": {
            "border": "border-thin-greyXXXdark",
            "boxShadow": "0 10px 16px -4px rgba(0, 0, 0, 0.24)"
        },
        "affiliate-bar": {
            "variant": "ad-text-primary"
        },
        "author-bio-bio": {
            "& p": {
                "margin": "0"
            },
            "& p ": {
                "lineHeight": "lineheight-xxlg"
            },
            "variant": "body-tertiary"
        },
        "author-bio-bio-job-title-wrapper": {},
        "author-bio-job-title": {
            "marginTop": "xs",
            "variant": "byline-primary"
        },
        "author-bio-label": {
            "color": "greyXdark",
            "variant": "byline-primary"
        },
        "author-bio-letter-mark-icon": {},
        "author-bio-name": {
            "variant": "byline-primary"
        },
        "author-bio-name-job-title-container": {
            "alignItems": "baseline"
        },
        "author-bio-read-more": {
            "&:hover": {
                "backgroundSize": "0 0",
                "color": "greyXXdark"
            },
            "backgroundImage": "linear-gradient( to bottom, #F5F5F5, #F5F5F5)",
            "backgroundPosition": "0 100%",
            "backgroundRepeat": "repeat-x",
            "backgroundSize": "0 0",
            "color": "brandColorQuinary",
            "fontSize": "font-size-16",
            "pb": "0.05rem",
            "pt": "0.05rem",
            "variant": "body-secondary"
        },
        "authors-bio-wrapper": {
            "borderTop": "border-thin-greyXXdark",
            "marginTop": "l"
        },
        "big-story-block": {
            "bg": {
                "md": "brandColorTertiary"
            },
            "p": {
                "md": "2.5rem"
            }
        },
        "big-story-feed-block": {
            "bg": "bg-block-big-story-feed"
        },
        "block-header": {
            "mb": "l",
            "p": "{l} 0 {xs}"
        },
        "block-header-design-element-before": {
            "bps": [
                {
                    "options": {
                        "size": "<md"
                    },
                    "value": {
                        "&:before": {
                            "_defaults": false,
                            "backgroundImage": [
                                "/static/images/Clover.svg",
                                {
                                    "defaults": false
                                },
                                {
                                    "scope": "@brand"
                                }
                            ],
                            "backgroundRepeat": "no-repeat",
                            "bottom": "-0.2rem",
                            "color": "white",
                            "content": "'_'",
                            "display": "inline-block",
                            "height": "1.25rem",
                            "lineHeight": "lineheight-base",
                            "mb": "0.5rem",
                            "mr": "xs",
                            "position": "relative",
                            "width": "1.25rem"
                        }
                    }
                },
                {
                    "options": {
                        "size": "md>"
                    },
                    "value": {
                        "&:before": {
                            "_defaults": false,
                            "backgroundImage": [
                                "/static/images/Clover.svg",
                                {
                                    "defaults": false
                                },
                                {
                                    "scope": "@brand"
                                }
                            ]
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "backgroundRepeat": "no-repeat"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "bottom": "-0.325rem"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "color": "white"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "content": "'_'"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "display": "inline-block"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "height": "1.25rem"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "lineHeight": "lineheight-base"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "mb": "0.5rem"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "mr": "xs"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "position": "relative"
                        }
                    }
                },
                {
                    "value": {
                        "&:before": {
                            "width": "1.25rem"
                        }
                    }
                }
            ]
        },
        "block-heading": {
            "borderBottom": "border-xxs-black",
            "pb": "xs",
            "variant": "headline-primary"
        },
        "block-subheading": {
            "variant": "subheadline-primary"
        },
        "body-blockquote": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "bg": "brandColorTertiary",
            "borderLeft": "border-med-brand-quaternary",
            "fontFamily": "primary",
            "fontSize": "font-size-18",
            "lineHeight": "lineheight-xlg",
            "p": "{xs} {m}"
        },
        "body-dropcap": {
            "&:first-letter": {
                "@-moz-document url-prefix()": {
                    "mt": "xs"
                },
                "fontFamily": "secondary",
                "fontSize": "5.5197",
                "lineHeight": "lineheight-xxsmall"
            }
        },
        "body-h2": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-30",
                "<sm": "font-size-30",
                "lg": "font-size-40",
                "md": "font-size-35"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-md",
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            },
            "mb": "1rem"
        },
        "body-h3": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "&:after": {
                "bg": "white",
                "borderRight": "border-xxs-black",
                "borderTop": "border-xxs-black",
                "bottom": "-0.5625rem",
                "content": "''",
                "height": "0.9375rem",
                "left": "0",
                "margin": "auto",
                "position": "absolute",
                "right": "0",
                "transform": "rotate(135deg)",
                "verticalAlign": "middle",
                "width": "0.9375rem"
            },
            "&:before": {
                "borderBottom": "border-xxs-black",
                "content": "''",
                "left": {
                    "<lg": "0",
                    "lg": "50%"
                },
                "position": "absolute",
                "textAlign": "center",
                "top": "100%",
                "transform": {
                    "lg": "translateX(-50%)"
                },
                "width": {
                    "<lg": "100%",
                    "lg": "80%"
                }
            },
            "fontFamily": "TitlePrimary",
            "fontSize": {
                "<md": "font-size-28",
                "<sm": "font-size-28",
                "lg": "font-size-40",
                "md": "font-size-32"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-2",
            "lineHeight": {
                "<md": "lineheight-sm",
                "<sm": "lineheight-xs",
                "lg": "lineheight-base",
                "md": "lineheight-base"
            },
            "mb": "1.45rem",
            "mt": {
                "<lg": "s",
                "mt": "l"
            },
            "pb": "xs",
            "position": "relative",
            "textAlign": "center"
        },
        "body-h4": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-24",
                "<sm": "font-size-26",
                "lg": "font-size-30",
                "md": "font-size-26"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-lg",
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            },
            "mt": "l"
        },
        "body-image-caption": {
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "variant": "body-secondary"
        },
        "body-image-container": {
            "& a span": {
                "right": "1rem"
            }
        },
        "body-loop-caption": {
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "variant": "body-secondary"
        },
        "body-ol": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "margin": {
                "_": "{s} 0 0 {xs}",
                "md": "{s} 0"
            },
            "variant": "body-primary"
        },
        "body-text": {
            "variant": "body-primary"
        },
        "body-tip": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "border": "border-thin-greyLight",
            "borderColor": "black",
            "borderWidth": "0.0625rem 0.3125rem",
            "fontFamily": "primary",
            "fontSize": "font-size-18",
            "letterSpacing": "letter-spacing-4",
            "lineHeight": "lineheight-xlg",
            "textAlign": "left"
        },
        "body-ul": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "margin": {
                "_": "{s} 0 0 {xs}",
                "md": "{s} 0"
            },
            "variant": "body-primary"
        },
        "breadcrumbs-link": {
            "variant": "breadcrumbs-link-primary"
        },
        "breadcrumbs-link-section": {
            "variant": "breadcrumbs-link-primary"
        },
        "breadcrumbs-list": {
            "variant": "breadcrumbs-primary"
        },
        "breadcrumbs-list-section": {
            "marginBottom": "m",
            "marginTop": "-{m}",
            "textAlign": "center",
            "variant": "left-align-breadcrumb"
        },
        "breaker-ad-text": {
            "lineHeight": "lineheight-base",
            "textTransform": "uppercase",
            "variant": "ad-text-primary"
        },
        "button-primary": {
            "variant": "button-primary"
        },
        "by-line": {
            "pr": "xxs",
            "variant": "byline-primary"
        },
        "by-line-name": {
            "pr": "xxs",
            "variant": "byline-primary"
        },
        "byline-enhanced-author-job-title": {
            "color": "greyXXdark",
            "mt": "xs",
            "variant": "byline-uppercase-primary"
        },
        "byline-enhanced-author-name": {
            "variant": "byline-uppercase-primary"
        },
        "byline-enhanced-container": {},
        "byline-enhanced-icon": {
            "primary": "brandColorQuinary"
        },
        "byline-enhanced-label": {
            "mt": "xs",
            "variant": "byline-uppercase-primary"
        },
        "byline-enhanced-wrapper": {
            "alignItems": "center",
            "display": "flex",
            "flexWrap": "wrap",
            "justifyContent": "center",
            "marginTop": "0",
            "span": {
                "display": "inherit"
            },
            "variant": "left-align-enhanced-byline-container"
        },
        "checkbox-error-text": {
            "variant": "small-specs-error-text-primary"
        },
        "checkbox-label-text": {
            "fontFamily": "BodySanSerif",
            "variant": "overlay-item-text"
        },
        "chip-label": {
            "fontFamily": "",
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-base"
        },
        "collapsible-header": {
            "& strong": {
                "fontFamily": "inherit"
            },
            "variant": "label-header-primary"
        },
        "collapsible-header-button": {
            "bg": "white",
            "border": "0",
            "borderBottom": "none",
            "borderTop": "border-thin-grey",
            "paddingBottom": "xxs",
            "paddingTop": "xxs",
            "textAlign": "left",
            "width": "100%"
        },
        "collapsible-icon-wrapper": {
            "border": "border-thin-greyXdark",
            "borderRadius": "50%",
            "height": "iconSize.l",
            "marginRight": "xs",
            "padding": "xxxs",
            "span": {
                "height": "iconSize.s",
                "width": "iconSize.s"
            },
            "width": "iconSize.l"
        },
        "collapsible-section": {
            "marginBottom": "0"
        },
        "collapsible-section-text": {
            "> p": {
                "marginTop": "0"
            },
            "variant": "body-primary",
            "width": "100%"
        },
        "content-header-action-button-wrapper": {
            "marginTop": "s"
        },
        "content-header-by-line-container": {
            "a": {
                "textDecorationColor": "{*colors.brandColorQuinary}",
                "textDecorationThickness": "0.08rem"
            },
            "color": "greyXXXdark",
            "mb": "xs",
            "pr": "xxs",
            "span": {
                "display": "inline-block",
                "lineHeight": "lineheight-xxlg"
            },
            "variant": "byline-primary"
        },
        "content-header-dek": {
            "fontFamily": "DekPrimary",
            "fontSize": "font-size-16",
            "fontWeight": "normal",
            "lineHeight": "lineheight-md",
            "mb": "xs"
        },
        "content-header-left-right-button-wrapper": {
            "display": "flex",
            "justifyContent": "center"
        },
        "content-header-left-right-byline-enhanced-container": {
            "m": "0",
            "maxWidth": "none"
        },
        "content-header-publish-date": {
            "color": "greyXXdark",
            "ml": "xs"
        },
        "content-header-text-left-right-container": {
            "textAlign": {
                "md": "center"
            }
        },
        "content-header-text-over-intro-text-dark-line1": {
            "border": "border-xxs-black",
            "display": "inline-block",
            "margin": {
                "<sm": "2.375rem 0 {xs} 1.5rem",
                "_": "2.375rem 0 {xs} 5.5rem"
            },
            "padding": "0.5rem",
            "textShadow": "shadow-greyXdark",
            "variant": "label-senary"
        },
        "content-header-text-over-intro-text-dark-line2": {
            "margin": {
                "<sm": "0 2.438rem 0 1.375rem",
                "_": "0 0 0 5.188rem"
            },
            "textShadow": "shadow-greyXdark",
            "variant": "headline-quinary"
        },
        "content-header-text-over-intro-text-light-line1": {
            "border": "border-xxs-white",
            "display": "inline-block",
            "margin": {
                "<sm": "2.375rem 0 {s} 1.5rem",
                "_": "2.375rem 0 {s} 5.5rem"
            },
            "padding": "0.5rem",
            "textShadow": "shadow-greyXdark",
            "variant": "label-senary"
        },
        "content-header-text-over-intro-text-light-line2": {
            "margin": {
                "<sm": "0 2.438rem 0 1.375rem",
                "_": "0 0 0 5.188rem"
            },
            "textShadow": "shadow-greyXdark",
            "variant": "headline-quinary"
        },
        "content-header-text-over-intro-text-wrapper-dark": {
            "padding": "m",
            "textAlign": "left"
        },
        "content-header-text-over-intro-text-wrapper-light": {
            "padding": "m",
            "textAlign": "left"
        },
        "content-header-title": {
            "fontSize": {
                "<md": "font-size-32",
                "lg": "font-size-50",
                "md": "font-size-40"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-base",
                "lg": "lineheight-base",
                "md": "lineheight-base"
            },
            "marginY": "s",
            "variant": "headline-tertiary"
        },
        "content-header-title-left-right": {
            "fontFamily": "secondary",
            "fontSize": {
                "<lg": "font-size-34",
                "<sm": "font-size-40",
                "lg": "font-size-50",
                "md": "font-size-29",
                "xlg": "font-size-52"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<lg": "lineheight-xs",
                "<sm": "lineheight-xs",
                "lg": "lineheight-base",
                "md": "lineheight-xs",
                "xlg": "lineheight-xs"
            },
            "mb": {
                "md": "xs"
            }
        },
        "custom-item-dek": {
            "m": {
                "<sm": "1rem 0 0",
                "lg": "1rem 0 0",
                "md": "1rem 0 0",
                "sm": "1rem 0 0"
            },
            "variant": "dek-primary"
        },
        "custom-item-image": {
            "mb": "xs",
            "text-overflow": "ellipsis"
        },
        "custom-item-label": {
            "display": "inline-block",
            "marginBottom": "xs",
            "variant": "label-tag-primary"
        },
        "custom-item-label-big-story-feed": {
            "display": "inline-block",
            "marginBottom": "xs",
            "variant": "label-tag-primary"
        },
        "custom-item-meta": {
            "pr": "xxs"
        },
        "custom-item-publish-date": {
            "pr": "xxs",
            "variant": "byline-primary"
        },
        "custom-item-title": {
            "my": "0",
            "variant": "title-primary"
        },
        "custom-item-title-text": {
            "my": "0",
            "variant": "title-primary"
        },
        "dim-overlay": {
            "elevation": "sunken"
        },
        "do-not-sell": {
            "bg": "white",
            "border": "border-xxs-black",
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-lg",
            "padding": "xs",
            "textAlign": "center",
            "textTransform": "capitalize",
            "variant": "menu-secondary"
        },
        "dropdown-contentdropdown-content": {
            "border": "border-dropdown"
        },
        "dropdown-label-headline": {
            "variant": "dropdown-text-primary"
        },
        "dropdown-link-list-collapsed": {
            "variant": "specs-item-primary"
        },
        "dropdown-menu-item": {
            "&:hover": {
                "bg": "bg-droppdown-list-hover"
            },
            "background": "bg-droppdown-list",
            "border": "border-dropdown",
            "variant": "dropdown-text-primary"
        },
        "dropdown-menu-item-arrow-button": {
            "transition": "all 0.3s ease-in-out"
        },
        "dropdown-menu-item-link": {
            "textTransform": "capitalize"
        },
        "dropdown-menu-label-item": {
            "fontWeight": "normal"
        },
        "dropdown-menu-label-item-username": {
            "fontWeight": "bold"
        },
        "editorial-links-header": {
            "variant": "label-quinary"
        },
        "editorial-links-list-item": {
            "borderBottom": "border-none-transparent",
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-16",
                "md": "font-size-18"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-md",
                "md": "lineheight-md"
            }
        },
        "editorial-links-wrapper": {
            "borderColor": "brandColorQuaternary",
            "borderWidth": "0.0625rem 0"
        },
        "embedded-gallery-custom-tag": {
            "marginBottom": "xxs",
            "variant": "label-tag-primary"
        },
        "embedded-gallery-dek": {
            "& a": {
                "fontWeight": "bold"
            },
            "& p": {
                "fontFamily": "BodyPrimary",
                "fontSize": "font-size-17",
                "lineHeight": "lineheight-lg"
            }
        },
        "embedded-gallery-headline": {
            "variant": "title-senary"
        },
        "embedded-gallery-image-wrapper": {
            "& img": {
                "marginBottom": "xs"
            }
        },
        "embedded-gallery-product-button": {
            "marginY": "xs",
            "variant": "button-primary"
        },
        "embedded-gallery-product-custom-tag": {
            "display": "inline-block",
            "marginBottom": "xxs",
            "marginTop": "xxs",
            "variant": "label-tag-primary"
        },
        "embedded-gallery-product-description": {
            "a.body-btn-link": {
                "display": "inline-block",
                "marginY": "xs"
            },
            "fontFamily": "BodyPrimary",
            "fontSize": "font-size-17",
            "lineHeight": "lineheight-lg",
            "variant": ""
        },
        "embedded-gallery-product-label": {
            "variant": "label-quaternary"
        },
        "embedded-gallery-product-pros-cons-container": {
            "borderTop": {
                "md": "none"
            }
        },
        "embedded-gallery-product-pros-cons-header": {
            "variant": "label-tertiary"
        },
        "embedded-gallery-product-pros-cons-list": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-14"
            },
            "lineHeight": {
                "<sm": "lineheight-lg",
                "lg": "lineheight-lg"
            }
        },
        "embedded-gallery-product-title": {
            "variant": "title-quaternary"
        },
        "embedded-gallery-product-wrapper": {
            "textAlign": "center"
        },
        "embedded-gallery-title": {
            "variant": "title-quaternary"
        },
        "embedded-overlay-product-button": {
            "&:hover": {
                "bg": "white"
            },
            "bg": "grey",
            "borderRadius": "0.125rem",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-13",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-base",
            "marginY": "xs",
            "p": "0.6rem 1rem",
            "textTransform": "uppercase",
            "transition": "all 0.3s ease-in-out",
            "width": "fit-content"
        },
        "embedded-overlay-product-button-container": {
            "alignItems": "start"
        },
        "embedded-overlay-product-con-item-icon": {
            "primary": "white"
        },
        "embedded-overlay-product-cons-item": {
            "fontFamily": "primary",
            "fontWeight": "bold"
        },
        "embedded-overlay-product-coupon-button-copied": {
            "variant": "button-discount-contained-OnDark"
        },
        "embedded-overlay-product-coupon-button-default": {
            "variant": "button-discount-outline-OnDark"
        },
        "embedded-overlay-product-coupon-tag-icon": {
            "mr": "0.5rem",
            "primary": "transparent",
            "secondary": "fg-discount-onDark"
        },
        "embedded-overlay-product-coupon-wrapper": {
            "alignItems": "start",
            "marginY": "0.5rem"
        },
        "embedded-overlay-product-custom-tag": {
            "marginY": "xxs",
            "variant": "label-tag-primary-darkbg"
        },
        "embedded-overlay-product-description": {
            "a": {
                "&:hover": {
                    "color": "grey",
                    "textDecorationColor": "grey"
                },
                "color": "white",
                "textDecorationColor": "white"
            },
            "a.body-btn-link": {
                "&:hover": {
                    "bg": "white",
                    "color": "black"
                },
                "bg": "grey"
            },
            "fontWeight": "bold",
            "variant": "body-secondary"
        },
        "embedded-overlay-product-details": {
            "marginX": {
                "<sm": "0",
                "sm>": "0"
            }
        },
        "embedded-overlay-product-discount": {
            "color": "white"
        },
        "embedded-overlay-product-info": {
            "border": {
                "md>": "border-thin-white"
            },
            "marginBottom": {
                "md>": "xs"
            },
            "padding": {
                "md>": "s"
            }
        },
        "embedded-overlay-product-key-specs-container": {},
        "embedded-overlay-product-key-specs-line": {},
        "embedded-overlay-product-key-specs-table": {
            "variant": "specs-item-primary"
        },
        "embedded-overlay-product-key-specs-title": {
            "variant": "label-header-primary"
        },
        "embedded-overlay-product-key-specs-value-item": {
            "padding": "m"
        },
        "embedded-overlay-product-key-specs-value-label": {
            "textAlign": "left"
        },
        "embedded-overlay-product-pro-item-icon": {
            "primary": "white"
        },
        "embedded-overlay-product-pros-cons-container": {
            "borderTop": {
                "md": "none"
            }
        },
        "embedded-overlay-product-pros-cons-header": {
            "fontFamily": "tertiary",
            "fontSize": "font-size-15",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-base",
            "m": "{m} 0 {s}",
            "textTransform": "uppercase"
        },
        "embedded-overlay-product-pros-cons-list": {
            "fontFamily": "TitlePrimary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-16"
            },
            "lineHeight": {
                "<sm": "lineheight-xxlg",
                "lg": "lineheight-xxlg"
            }
        },
        "embedded-overlay-product-pros-item": {
            "fontFamily": "primary",
            "fontWeight": "bold"
        },
        "embedded-overlay-product-slide-number": {
            "fontFamily": "primary",
            "fontSize": "font-size-14",
            "fontWeight": "bold",
            "lineHeight": "lineheight-base",
            "variant": ""
        },
        "embedded-overlay-product-title": {
            "mb": "xs",
            "variant": "title-tertiary"
        },
        "embedded-product-button": {
            "marginY": "xs",
            "variant": "button-primary"
        },
        "embedded-product-con-item": {
            "fontFamily": "primary"
        },
        "embedded-product-con-item-icon": {
            "primary": "greyXdark"
        },
        "embedded-product-coupon-button-copied": {
            "variant": "button-discount-contained"
        },
        "embedded-product-coupon-button-default": {
            "variant": "button-discount-outline"
        },
        "embedded-product-coupon-tag-icon": {
            "mr": "0.5rem",
            "primary": "transparent",
            "secondary": "fg-discount"
        },
        "embedded-product-coupon-tag-info-label": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-11",
            "fontWeight": "bold",
            "lineHeight": "lineheight-sm"
        },
        "embedded-product-coupon-tag-info-label-wrapper": {
            "mb": "xs"
        },
        "embedded-product-coupon-tag-info-text": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-sm",
            "mt": "s"
        },
        "embedded-product-coupon-wrapper": {
            "marginY": "0.5rem"
        },
        "embedded-product-custom-tag": {
            "marginBottom": "xxs",
            "variant": "label-tag-primary"
        },
        "embedded-product-description": {
            "variant": "body-secondary"
        },
        "embedded-product-details-center": {
            "pl": {
                "md": "s"
            }
        },
        "embedded-product-discount": {
            "color": "globalColorDiscount",
            "fontFamily": "LabelPrimary",
            "paddingTop": "xxs"
        },
        "embedded-product-key-specs-container": {},
        "embedded-product-key-specs-line": {},
        "embedded-product-key-specs-table": {
            "variant": "specs-item-primary"
        },
        "embedded-product-key-specs-title": {
            "variant": "label-header-primary"
        },
        "embedded-product-key-specs-value-item": {
            "padding": "m"
        },
        "embedded-product-key-specs-value-label": {},
        "embedded-product-price-text": {
            "fontFamily": "MenuPrimary"
        },
        "embedded-product-pro-item": {
            "fontFamily": "primary"
        },
        "embedded-product-pro-item-icon": {
            "primary": "greyXdark"
        },
        "embedded-product-pros-cons-container": {
            "borderTop": {
                "md": "border-thin-grey"
            },
            "mt": "s",
            "pt": "s"
        },
        "embedded-product-pros-cons-header": {
            "variant": "label-tertiary"
        },
        "embedded-product-pros-cons-list": {
            "fontFamily": "TitlePrimary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-14",
                "md": "font-size-16"
            },
            "lineHeight": {
                "<sm": "lineheight-lg",
                "lg": "lineheight-lg",
                "md": "lineheight-lg"
            }
        },
        "embedded-product-title": {
            "marginY": "xs",
            "variant": "title-quaternary"
        },
        "embedded-product-title-center": {
            "marginY": {
                "<sm": "xs",
                "md": "0"
            },
            "variant": "title-quinary"
        },
        "embedded-product-title-left": {
            "variant": "title-quinary"
        },
        "embedded-product-title-right": {
            "variant": "title-quinary"
        },
        "embedded-product-wrapper-center": {
            "border": {
                "md": "border-thin-grey"
            },
            "mb": "m",
            "p": {
                "md": "s"
            }
        },
        "error-text": {
            "variant": "small-specs-error-text-primary"
        },
        "feed-body-label": {
            "variant": "label-tag-primary"
        },
        "feed-product-button": {
            "mb": "xs",
            "variant": "button-primary"
        },
        "feed-product-button-container": {
            "marginY": "xs",
            "mt": {
                "<sm": "s",
                "lg": "m",
                "sm": "s"
            }
        },
        "feed-product-custom-tag": {
            "variant": "label-tag-primary"
        },
        "feed-product-description": {
            "m": {
                "<sm": "{m} {xs} 0",
                "lg": "{m} 3.313rem 0",
                "md": "{m} {xs} 0",
                "sm": "{m} {xs} 0"
            },
            "variant": "dek-primary"
        },
        "feed-product-info-details": {
            "margin": {
                "_": "xs",
                "xlg": "m"
            },
            "textAlign": "center"
        },
        "feed-product-title": {
            "variant": "title-quinary"
        },
        "field-message-container": {
            "fontFamily": "BodySanSerif",
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-sm",
            "variant": "overlay-item-text"
        },
        "footer": {
            "variant": "menu-tertiary"
        },
        "footer-affiliate-disclosure": {
            "lineHeight": "lineheight-lg"
        },
        "footer-fixed": {
            "bg": "greyXlight",
            "boxShadow": "0 0 40px rgb(0 0 0, 0.2)"
        },
        "footer-fixed-button": {
            "variant": "button-text"
        },
        "footer-fixed-button-collapsed": {
            "color": "black"
        },
        "footer-fixed-button-open": {
            "color": "black"
        },
        "footer-fixed-content": {
            "variant": "body-primary"
        },
        "footer-legal-menu": {
            "lineHeight": "lineheight-max"
        },
        "footer-legal-menu-item-link": {
            "paddingRight": "m"
        },
        "footer-logo": {
            "maxHeight": "1.4375rem",
            "width": "7rem"
        },
        "footer-social-button": {
            "height": "iconSize.xs",
            "primary": "black",
            "width": "iconSize.xs"
        },
        "form-input-field": {
            "&::placeholder": {
                "color": "greyXXXdark"
            },
            "variant": "overlay-item-text"
        },
        "form-input-label": {
            "fontFamily": "BodySanSerif",
            "variant": "overlay-item-text"
        },
        "form-input-required": {
            "color": "globalColorError",
            "variant": "overlay-item-text"
        },
        "form-select": {
            "variant": "overlay-item-text"
        },
        "form-select-label": {
            "variant": "overlay-item-text"
        },
        "form-select-multi-value": {
            "bg": "greyLight",
            "marginY": "0",
            "p": "0.2rem",
            "variant": "specs-item-primary"
        },
        "form-select-option": {
            "variant": "overlay-item-text"
        },
        "form-select-placeholder": {
            "lineHeight": "lineheight-max",
            "p": "0",
            "variant": "overlay-item-text"
        },
        "form-select-required": {
            "variant": "overlay-item-text"
        },
        "form-select-single-value": {
            "variant": "overlay-item-text"
        },
        "form-text-area-counter": {
            "fontFamily": "BodySanSerif"
        },
        "form-text-area-field": {
            "variant": "overlay-item-text"
        },
        "four-across-block": {
            "bg": "bg-block-four-across"
        },
        "four-across-block-content": {
            "borderLeft": {
                "<sm": "border-none-transparent",
                "md": "border-xxs-grey"
            },
            "borderTop": {
                "<sm": "border-none-transparent",
                "md": "border-xxs-grey"
            }
        },
        "gallery-bottom-nav-arrow-next-icon": {
            "height": "0.6rem",
            "position": "relative",
            "top": "0",
            "width": "0.6rem"
        },
        "gallery-bottom-nav-container": {
            "borderTop": "border-thin-greyXXdark",
            "marginBottom": "m"
        },
        "gallery-bottom-next-slide-button": {
            "pt": "0.6rem",
            "variant": "button-contained"
        },
        "gallery-bottom-previous-slide-button": {
            "variant": "button-text"
        },
        "gallery-nav-next-gallery-link": {
            "&:hover": {
                "zIndex": "middle"
            },
            "display": "grid",
            "gridTemplateAreas": "'menu main main right' 'menu footer footer right'",
            "variant": "button-outline"
        },
        "gallery-nav-next-gallery-link-header": {
            "gridArea": "main",
            "letterSpacing": "letter-spacing-5",
            "pt": "1rem",
            "variant": "specs-item-primary"
        },
        "gallery-nav-next-gallery-link-title": {
            "gridArea": "footer",
            "height": "1.9rem",
            "mt": "-1rem",
            "variant": "breadcrumbs-primary"
        },
        "gallery-next-button-arrow": {
            "primary": [
                "black",
                "white"
            ]
        },
        "gallery-next-gallery-bottom-thumbnail": {},
        "gallery-next-gallery-button-arrow": {
            "primary": "black"
        },
        "gallery-next-gallery-link": {
            "textDecoration": "none"
        },
        "gallery-next-gallery-link-wrapper": {
            "&:hover": {
                "bg": "greyXlight"
            },
            "border": "border-thin-greyXXdark",
            "padding": "{xxs} {xs} {xxs} {xxs}",
            "transition": "all 0.3s ease-in-out"
        },
        "gallery-next-gallery-top-link-wrapper": {
            "&:last-child": {
                "textDecoration": "none"
            },
            "variant": "button-contained"
        },
        "gallery-next-gallery-view-link-header": {
            "marginBottom": "0.188rem",
            "variant": "specs-item-primary"
        },
        "gallery-next-gallery-view-link-text": {},
        "gallery-next-gallery-view-link-title": {
            "variant": "breadcrumbs-primary"
        },
        "gallery-previous-button-arrow": {
            "primary": [
                "black",
                "white"
            ]
        },
        "gallery-slide-item-counter-arrow-next-icon": {},
        "gallery-slide-item-counter-arrow-previous-icon": {},
        "gallery-slide-message": {
            "variant": "small-specs-label-text-primary"
        },
        "gallery-slide-message-container": {},
        "gallery-top-nav-arrow-next-icon": {
            "height": "0.6rem",
            "position": "relative",
            "top": "0",
            "width": "0.6rem"
        },
        "gallery-top-nav-arrow-previous-icon": {
            "height": "0.6rem",
            "position": "relative",
            "top": "0",
            "width": "0.6rem"
        },
        "gallery-top-nav-container": {
            "borderBottom": "border-thin-greyXXdark"
        },
        "gallery-top-next-slide-button": {
            "variant": "button-contained"
        },
        "gallery-top-previous-slide-button": {
            "variant": "button-contained"
        },
        "gallery-view-button": {
            "variant": "button-contained"
        },
        "gallery-view-button-arrow": {
            "primary": [
                "black",
                "white"
            ]
        },
        "gallery-view-button-slide-count": {
            "paddingBottom": "xxs"
        },
        "gallery-view-button-text": {
            "paddingX": "xs"
        },
        "gallery-view-button-title": {
            "fontSize": "font-size-18"
        },
        "isticle-wrapper": {},
        "legal-menu-link": {
            "variant": "menu-primary"
        },
        "link-body-primary": {
            "&:hover": {
                "textDecorationColor": "{*colors.greyXXdark}"
            },
            "color": "brandColorQuinary",
            "fontWeight": "bold",
            "textDecorationColor": "{*colors.brandColorQuinary}"
        },
        "link-list-menu-item": {
            "fontFamily": "BodySanSerif"
        },
        "list-item-contained": {
            "a:focus-visible": {
                "borderRadius": "3rem",
                "outline": "outline-focus-black"
            }
        },
        "list-item-contained-active": {
            "bg": "black",
            "color": "white"
        },
        "list-item-default-active": {
            "&:first-of-type a::before": {
                "marginLeft": {
                    "<sm": "-{*sizes.primitive-16}"
                },
                "paddingRight": {
                    "<sm": "{*sizes.primitive-15}"
                }
            },
            "&:last-of-type a::before": {
                "marginRight": {
                    "<sm": "-{*sizes.primitive-16}"
                },
                "paddingRight": {
                    "<sm": "{*sizes.primitive-20}"
                }
            },
            "a": {
                "&:after": {
                    "fontWeight": "normal"
                },
                "&:before": {
                    "borderBottom": "border-mlg-grey",
                    "bottom": "-1.563rem",
                    "content": "''",
                    "left": "-3.3px",
                    "position": "absolute",
                    "pr": "2.5px",
                    "width": "100%"
                },
                "fontWeight": "bold"
            },
            "position": "relative"
        },
        "list-item-link": {
            "fontFamily": "MenuPrimary"
        },
        "listicle-breaker-ad": {},
        "listicle-breaker-ad-placeholder": {},
        "listicle-header": {},
        "listicle-header-adsfree-wrapper": {},
        "listicle-header-wrapper": {},
        "listicle-intro": {},
        "listicle-product-button": {
            "marginBottom": "xs",
            "variant": "button-primary"
        },
        "listicle-product-button-container": {
            "a": {
                "marginBottom": "xs"
            },
            "marginTop": {
                "lg": "m",
                "md>": "0"
            }
        },
        "listicle-product-cons-column": {
            "padding": {
                "lg": "{s} {xs} {xs} 0",
                "xxs": "{s} {xxs} {xs} 0"
            }
        },
        "listicle-product-cons-item": {},
        "listicle-product-custom-tag": {
            "marginBottom": "xxs",
            "variant": "label-tag-primary"
        },
        "listicle-product-description": {
            "variant": "body-primary"
        },
        "listicle-product-details": {
            "paddingTop": {
                "lg>": "xs"
            }
        },
        "listicle-product-discount": {
            "color": "globalColorDiscount",
            "marginY": "xxs",
            "mt": "xs",
            "variant": "item-product-primary"
        },
        "listicle-product-image-credit": {},
        "listicle-product-image-wrapper": {
            "marginTop": "s"
        },
        "listicle-product-info": {
            "marginBottom": {
                "md>": "xs"
            }
        },
        "listicle-product-info-details": {
            "marginY": "s"
        },
        "listicle-product-key-specs-container": {},
        "listicle-product-key-specs-line": {},
        "listicle-product-key-specs-table": {
            "variant": "specs-item-primary"
        },
        "listicle-product-key-specs-title": {
            "variant": "label-header-primary"
        },
        "listicle-product-key-specs-value-item": {
            "padding": "m"
        },
        "listicle-product-key-specs-value-label": {},
        "listicle-product-pros-column": {
            "borderRight": "border-thin-grey",
            "padding": {
                "lg": "{s} {xs} {xs} {xs}",
                "xxs": "{s} {xxs} {xs} 0"
            }
        },
        "listicle-product-pros-cons-container": {
            "border": "border-thin-grey",
            "marginX": {
                "xxs": "{mobile-gutter}"
            },
            "paddingX": "s"
        },
        "listicle-product-pros-cons-header": {
            "variant": "label-tertiary"
        },
        "listicle-product-pros-cons-list": {
            "fontFamily": "DekPrimary",
            "fontSize": {
                "<sm": "font-size-14",
                "lg": "font-size-14"
            },
            "lineHeight": {
                "<sm": "lineheight-lg",
                "lg": "lineheight-lg"
            }
        },
        "listicle-product-pros-item": {},
        "listicle-product-slide-number": {
            "marginY": "0",
            "variant": "number-primary"
        },
        "listicle-product-title": {
            "variant": "slide-title-primary"
        },
        "listicle-product-wrapper": {},
        "listicle-slide-container": {},
        "listicle-slide-inner-container": {},
        "listicle-slide-item-content": {},
        "listicle-slide-item-dek": {
            "& p, ul, ol": {
                "& em": {
                    "fontFamily": "BodyTertiary",
                    "fontStyle": "italic"
                },
                "fontFamily": "BodyPrimary",
                "fontSize": "font-size-19",
                "lineHeight": "lineheight-xxlg"
            },
            "a.body-btn-link": {
                "&:hover": {
                    "color": "white"
                }
            },
            "a:hover": {
                "color": "greyXXXdark",
                "textDecorationColor": "border-thin-grey"
            }
        },
        "listicle-slide-item-embed": {},
        "listicle-slide-item-image": {
            "marginBottom": "xs"
        },
        "listicle-slide-item-meta": {},
        "listicle-slide-item-number": {
            "variant": "number-primary"
        },
        "listicle-slide-item-title": {
            "marginTop": "xs",
            "variant": "slide-title-primary"
        },
        "listicle-vertical-ad": {},
        "load-more-button": {
            "variant": "button-load-more-primary"
        },
        "load-more-button-author": {
            "variant": "button-load-more-primary"
        },
        "load-more-button-listicle": {
            "variant": "button-load-more-primary"
        },
        "load-more-button-overlay": {
            "variant": "button-load-more-primary"
        },
        "load-more-button-product-summary-view": {
            "variant": "button-load-more-primary"
        },
        "load-more-button-saved": {
            "variant": "button-load-more-primary"
        },
        "load-more-button-wrapper-listicle": {},
        "location-choice-menu-item-link": {
            "variant": "menu-primary"
        },
        "location-choice-sub-menu-item-link": {
            "variant": "menu-primary"
        },
        "marquee-body-text": {
            "& p": {
                "margin": {
                    "_": "0 auto {s}",
                    "xlg": "0 auto"
                }
            },
            "margin": "0 auto",
            "padding": {
                "_": "0 {mobileOuterGutter}",
                "md": "0 {tabletOuterGutter} {s}",
                "xlg": "0 0 {l}"
            },
            "variant": "body-primary"
        },
        "marquee-content": {
            "textAlign": "center",
            "width": {
                "lg": "31.25rem",
                "smd": "34rem",
                "xlg": "31.25rem"
            }
        },
        "marquee-logo": {
            "img": {
                "height": {
                    "lg": "auto"
                },
                "maxHeight": {
                    "_": "5.625rem",
                    "lg": "8rem",
                    "md": "6.25rem",
                    "sm": "5.625rem",
                    "xlg": "9rem"
                },
                "transform": "translate3d(0,0,0)",
                "width": "auto"
            },
            "textAlign": "center"
        },
        "media-poster-play-button": {
            "primary": "white"
        },
        "nav": {
            "bg": "white",
            "borderBottom": "border-xxs-grey",
            "height": {
                "<lg": "99px",
                "lg": "50px"
            }
        },
        "nav-bar": {
            "alignItems": "center",
            "display": "flex",
            "height": "100%",
            "m": "0 auto",
            "maxWidth": "75rem",
            "px": "0",
            "width": "100%"
        },
        "nav-bar-link": {
            "variant": "button-secondary"
        },
        "nav-bar-login-text": {
            "fontWeight": "normal",
            "variant": "button-secondary"
        },
        "nav-bar-top-list-container": {
            "borderBottom": {
                "_": "border-thin-greyXlight",
                "smd>": "0"
            },
            "borderTop": {
                "_": "border-thin-greyXlight",
                "smd>": "0"
            }
        },
        "nav-bar-top-list-item": {
            "padding": {
                "_": "0 {l} 0 {m}",
                "lg>": "0 {m} 0 {m}"
            },
            "variant": "button-secondary"
        },
        "nav-bar-top-list-link": {
            "&:hover": {
                "textDecoration": "underline",
                "textDecorationThickness": "0.0625rem",
                "textUnderlineOffset": "0.25rem"
            },
            "color": {
                "_": "inherit",
                "smd>": "inherit"
            },
            "lineHeight": "2.58918",
            "transition": "outline 0.3s ease-in-out, outline-offset 0.3s ease-in-out"
        },
        "nav-bar-top-list-link-highlight": {
            "textDecoration": "underline",
            "textDecorationThickness": "0.0625rem",
            "textUnderlineOffset": "0.25rem"
        },
        "nav-header-title": {
            "variant": "ad-text-primary"
        },
        "nav-logo": {
            "height": "1.25rem",
            "marginRight": {
                "_": "auto",
                "lg>": "xxs"
            },
            "mb": {
                "<lg": "0",
                "lg": "xxs"
            },
            "ml": "xs",
            "mx": {
                "<xxs": "0"
            },
            "width": {
                "<sm": "5rem",
                "<xxs": "5rem",
                "lg": "7rem",
                "md": "6rem",
                "sm": "5.5625rem"
            }
        },
        "nav-search-button": {
            "margin": "xxs",
            "padding": {
                "<sm": "0",
                "sm": "xxs"
            }
        },
        "nav-side-panel-button": {
            "& img": {
                "height": "iconSize.l",
                "width": "iconSize.l"
            },
            "& svg": {
                "fill": "black",
                "height": "iconSize.l",
                "width": "iconSize.l"
            },
            "padding": {
                "<md": "0.5rem {xxxs} 0.5rem {xs}",
                "md": "0.5rem {xs} 0.5rem {xs}",
                "xxs": "0.5rem {xxxs} 0.5rem 0"
            }
        },
        "nav-subscribe-link": {
            "&:focus-visible": {
                "outlineColor": "nav-subscribe-link-focus"
            },
            "fontWeight": "normal",
            "marginRight": "0",
            "px": {
                "<xxs": "0.7rem"
            },
            "variant": "button-contained"
        },
        "newsletter-content-back-button": {
            "p": "0.75rem {xl}",
            "variant": "button-contained"
        },
        "newsletter-content-button": {
            "flexShrink": "0",
            "p": "0.75rem {xl}",
            "variant": "button-contained"
        },
        "newsletter-content-email-icon": {
            "primary": "greyXXXdark"
        },
        "newsletter-content-footer-terms-of-use": {
            "margin": "{xs} {m} {m} 0",
            "textAlign": "left",
            "variant": "ad-text-primary"
        },
        "newsletter-content-headline": {
            "fontFamily": "TitlePrimary",
            "fontSize": {
                "<sm": "font-size-30",
                "lg": "font-size-40",
                "md": "font-size-38"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "newsletter-content-sub-headline": {
            "fontFamily": "DekPrimary",
            "fontSize": {
                "<sm": "font-size-18",
                "lg": "font-size-20"
            },
            "lineHeight": {
                "<sm": "lineheight-md",
                "lg": "lineheight-sm"
            }
        },
        "newsletter-content-wrapper": {
            "background": "white",
            "padding": {
                "<md": "l",
                "md>": "3rem {l}"
            }
        },
        "newsletter-feedpage-container": {
            "margin": "center",
            "maxWidth": "75rem",
            "padding": {
                "lg": "0",
                "md": "tablet-gutter",
                "xxs": "mobile-gutter"
            }
        },
        "newsletter-feedpage-email-wrapper": {
            "alignItems": {
                "<sm": "center",
                "sm>": "flex-end"
            },
            "columnGap": "1rem",
            "flexDirection": {
                "_": "column",
                "sm": "row"
            }
        },
        "newsletter-feedpage-wrapper": {
            "form": {
                "> div": {
                    "alignItems": {
                        "<sm": "center",
                        "sm": "flex-start"
                    }
                },
                "alignItems": "flex-start"
            },
            "py": "2.5rem",
            "width": "100%"
        },
        "newsletter-wrapper": {
            "backgroundImage": "url('/_assets/design-tokens/PR-143/1a74f8d/fre/static/images/marketing/bg-newsletter.jpg')"
        },
        "offer-card-body": {
            "p": {
                "<sm": "{l} {m}",
                "sm": "l"
            }
        },
        "offer-card-button": {
            "marginX": "auto",
            "variant": "button-contained",
            "width": "100%"
        },
        "offer-card-label": {
            "variant": "label-primary"
        },
        "offer-card-list-wrapper": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-12",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-3",
            "li": {
                "mb": "0.5rem"
            },
            "lineHeight": "lineheight-sm",
            "mb": "m",
            "pl": "0"
        },
        "offer-card-price": {
            "fontFamily": "LabelPrimary"
        },
        "offer-card-renewal": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-12",
            "letterSpacing": "letter-spacing-3",
            "lineHeight": "lineheight-md",
            "mb": "1.75rem",
            "textAlign": "center"
        },
        "offer-card-title": {
            "fontFamily": "LabelPrimary",
            "fontWeight": "bold",
            "mb": "1.125rem"
        },
        "offer-form-header-price": {
            "fontFamily": "LabelPrimary"
        },
        "offer-form-header-title": {
            "fontFamily": "LabelPrimary"
        },
        "offer-form-input-field": {
            "fontFamily": "BodySanSerif"
        },
        "offer-form-message": {
            "fontFamily": "LabelPrimary"
        },
        "offer-form-required-field-indicator": {
            "color": "greyXXdark",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-12"
        },
        "offer-form-select-field": {
            "fontFamily": "BodySanSerif"
        },
        "offer-form-text-area-field": {
            "fontFamily": "BodySanSerif"
        },
        "offer-form-text-area-label": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-13"
        },
        "offer-header-left-right-container": {
            "p": {
                "<sm": "0.5rem 0 {s}"
            }
        },
        "offer-header-text-only-container": {
            "p": {
                "<sm": "{m} 0 {s}",
                "sm": "{l} 0 {s}"
            }
        },
        "offer-input-label": {
            "fontFamily": "LabelPrimary"
        },
        "offer-membership-details": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-13"
        },
        "offer-renewal-security-description": {
            "fontFamily": "BodySanSerif",
            "lineHeight": "lineheight-sm"
        },
        "offer-select-wrapper": {
            "fontFamily": "LabelPrimary"
        },
        "offer-summary-header": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-21",
            "lineHeight": "lineheight-sm"
        },
        "offer-text-input": {
            "fontFamily": "BodySanSerif"
        },
        "overlay-gallery-headline": {
            "variant": "headline-tertiary"
        },
        "overlay-gallery-item-credit": {},
        "overlay-gallery-item-title": {
            "mt": "s",
            "variant": "title-tertiary"
        },
        "overlay-gallery-open-gallery-button": {
            "&:hover": {
                "color": "black"
            },
            "variant": "button-outline"
        },
        "overlay-gallery-title": {
            "variant": "title-senary"
        },
        "photo-credit-copyright": {
            "color": "greyXXdark",
            "pr": "xxs",
            "variant": "byline-primary"
        },
        "photo-credit-creditor": {
            "color": "greyXXdark",
            "pr": "xxs",
            "variant": "byline-primary"
        },
        "photo-credit-divider": {
            "color": "greyXXdark",
            "pr": "xxs",
            "variant": "byline-primary"
        },
        "photo-credit-figcaption-embedded-overlay": {
            "span": {
                "color": "white"
            }
        },
        "photo-credit-figcaption-lead-image": {
            "paddingLeft": {
                "<lg": "s",
                "lg": "0"
            }
        },
        "popover-avatar-button": {
            "bg": "bg-avatar",
            "border": "border-avatar",
            "color": "text-avatar",
            "variant": "dropdown-text-primary"
        },
        "popover-label-headline": {
            "variant": "dropdown-text-primary"
        },
        "popover-trigger": {
            "background": "white",
            "border": "border-dropdown",
            "variant": "dropdown-text-primary"
        },
        "product-explorer-article-link": {
            "variant": "button-secondary"
        },
        "product-explorer-filter-brand-label": {
            "fontWeight": "bold",
            "textTransform": "uppercase",
            "variant": "menu-primary"
        },
        "product-explorer-filter-chip-container": {
            "bg": "greyLight",
            "borderRadius": "xxxs",
            "p": "0.4rem"
        },
        "product-explorer-filter-chip-icon": {
            "primary": "black"
        },
        "product-explorer-filter-chip-label": {
            "fontWeight": "normal",
            "variant": "specs-item-primary"
        },
        "product-explorer-filter-header-placeholder": {
            "letterSpacing": "0",
            "lineHeight": "2rem",
            "variant": "overlay-item-text"
        },
        "product-explorer-filter-sortby-label": {
            "fontWeight": "bold",
            "textTransform": "uppercase",
            "variant": "menu-primary"
        },
        "product-explorer-grid": {
            "borderLeft": {
                "<sm": "border-none-transparent",
                "md": "border-xxs-grey"
            },
            "borderTop": {
                "<sm": "border-none-transparent",
                "md": "border-xxs-grey"
            },
            "gap": {
                "_": "0",
                "md": "0"
            },
            "mb": {
                "<sm": "m"
            }
        },
        "product-explorer-intro-text": {
            "fontFamily": "MenuPrimary"
        },
        "product-explorer-load-more-button": {
            "variant": "button-load-more-primary"
        },
        "product-summary-item": {},
        "pullquote": {
            "margin": "0",
            "paddingY": "s"
        },
        "pullquote-text": {
            "& b, strong": {
                "fontFamily": "inherit",
                "fontWeight": "bold"
            },
            "& em, i": {
                "fontFamily": "inherit",
                "fontStyle": "italic"
            },
            "fontFamily": "quaternary",
            "fontSize": {
                "<md": "font-size-40",
                "_": "font-size-26",
                "lg": "font-size-50",
                "md": "font-size-45"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-4",
            "lineHeight": {
                "<md": "lineheight-base",
                "_": "lineheight-sm",
                "lg": "lineheight-base",
                "md": "lineheight-base"
            },
            "margin": "0"
        },
        "recipe-info-container": {
            "bg": "white",
            "borderBottom": "border-thin-grey",
            "borderTop": "border-thin-grey",
            "margin": {
                "lg": "{s} 0",
                "md": "0"
            }
        },
        "recipe-info-item": {
            "fontFamily": "secondary",
            "fontSize": "font-size-12",
            "letterSpacing": "letter-spacing-1",
            "lineHeight": {
                "<sm": "lineheight-xlg",
                "lg": "lineheight-xlg",
                "md": "lineheight-xlg"
            }
        },
        "recipe-info-label": {
            "textTransform": "none"
        },
        "recipe-info-value": {},
        "recipe-info-value-item": {
            "color": "brandColorQuinary",
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-16",
                "md": "font-size-17"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "lineheight-xlg",
                "md": "lineheight-xlg"
            }
        },
        "recipe-info-value-unit": {
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-xlg"
        },
        "recipe-info-vertical-line": {},
        "recipe-ingredients-body": {},
        "recipe-ingredients-heading": {
            "variant": "headline-recipe"
        },
        "recipe-ingredients-list": {
            "& strong": {
                "fontWeight": "normal"
            }
        },
        "recipe-ingredients-list-item": {
            "borderBottom": "border-thin-greyLight",
            "fontFamily": "Inter, Helvetica, Arial, Sans-serif",
            "fontSize": {
                "_": "font-size-16",
                "md": "font-size-16",
                "xxlg": "font-size-16"
            },
            "letterSpacing": "letter-spacing-2",
            "lineHeight": {
                "_": "lineheight-md",
                "md": "lineheight-md",
                "xxlg": "lineheight-md"
            },
            "paddingY": ".75rem",
            "strong": {
                "fontWeight": "bold"
            }
        },
        "recipe-ingredients-section": {},
        "recipe-ingredients-subheading": {
            "marginBottom": "xs",
            "marginTop": "m",
            "variant": "headline-sub-recipe"
        },
        "recipe-ingredients-wrapper": {
            "marginTop": "s"
        },
        "recipe-instruction-wrapper": {},
        "recipe-instructions-heading": {
            "variant": "headline-recipe"
        },
        "recipe-instructions-list": {},
        "recipe-instructions-list-item": {
            "li span": {
                "fontWeight": "bold",
                "mb": "xs"
            },
            "span": {
                "fontFamily": "primary",
                "fontSize": "font-size-16",
                "letterSpacing": "letter-spacing-1",
                "textDecoration": "underline",
                "textDecorationThickness": "0.05rem",
                "textUnderlineOffset": "0.25rem"
            },
            "variant": "body-primary"
        },
        "recipe-instructions-subheading": {
            "marginBottom": "xs",
            "mb": "s",
            "mt": "0",
            "variant": "headline-sub-recipe"
        },
        "recipe-instructions-wrapper": {
            "marginTop": "s"
        },
        "recipe-introduction": {},
        "recipe-introduction-button-wrap": {},
        "recipe-introduction-gradient": {},
        "recipe-introduction-read-more-button": {
            "variant": "button-primary"
        },
        "recipe-nutrition-3rd-party-logo-wrapper": {
            "variant": "small-specs-label-text-secondary"
        },
        "recipe-nutrition-3rd-party-wrapper": {
            "variant": "small-specs-label-text-secondary"
        },
        "recipe-nutrition-activator": {
            "textDecoration": "underline",
            "variant": "specs-item-primary"
        },
        "recipe-nutrition-heading": {
            "variant": "label-header-primary"
        },
        "recipe-nutrition-link": {},
        "recipe-nutrition-list": {},
        "recipe-nutrition-list-item": {
            "variant": "small-specs-label-text-secondary"
        },
        "recipe-nutrition-list-item-label": {},
        "recipe-nutrition-subheading": {
            "variant": "specs-item-primary"
        },
        "recipe-nutrition-text": {
            "variant": "specs-item-primary"
        },
        "recipe-nutrition-wrapper": {},
        "recipe-tip": {
            "fontFamily": "primary",
            "fontSize": "font-size-18",
            "letterSpacing": "letter-spacing-4",
            "lineHeight": "lineheight-xlg"
        },
        "recipe-tip-wrapper": {
            "bg": "none",
            "border": "border-thin-grey",
            "borderColor": "black",
            "borderWidth": "0.0625rem 0.3125rem"
        },
        "save-button": {
            "display": "flex",
            "variant": "button-contained"
        },
        "save-button-icon": {
            "primary": [
                "black",
                "white"
            ]
        },
        "saved-button-contained": {
            "p": "{xs} {m}",
            "variant": "button-contained"
        },
        "saved-button-outline": {
            "p": "{xs} {m}",
            "variant": "button-outline"
        },
        "saved-dek": {
            "variant": "saved-headline-dek"
        },
        "saved-folder-confirmation-modal-button-contained": {
            "minWidth": "16.1875rem",
            "mt": "m",
            "variant": "button-contained"
        },
        "saved-folder-confirmation-modal-button-outline": {
            "mt": "xs",
            "variant": "button-outline"
        },
        "saved-folder-modal-button-contained": {
            "minWidth": "16.1875rem",
            "mt": "m",
            "variant": "button-contained"
        },
        "saved-folder-modal-button-text": {
            "color": "globalColorError",
            "mt": "xs",
            "variant": "button-text"
        },
        "saved-folder-title": {
            "variant": "title-tertiary"
        },
        "saved-headline": {
            "textAlign": "center",
            "variant": "saved-headline-primary"
        },
        "saved-item-button": {
            "&:focus": {
                "outline": "0.125rem dotted",
                "outlineOffset": "0.2rem"
            },
            "&:hover": {
                "background": "rgba(243, 176, 50, 0.8)",
                "bg": "brandColorSenary",
                "border": "border-thin-black",
                "borderColor": "black"
            },
            "background": "brandColorPrimary",
            "bg": "black",
            "border": "border-thin-black",
            "borderColor": "white",
            "margin": "xs",
            "transition": "all 0.3s ease-in-out"
        },
        "saved-item-title": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-22",
                "lg": "font-size-22",
                "md": "font-size-22",
                "sm": "font-size-22"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs",
                "sm": "lineheight-xs"
            },
            "textAlign": "center",
            "variant": ""
        },
        "saved-item-unsave-icon": {
            "primary": [
                "white",
                "black"
            ]
        },
        "saved-link-contained": {
            "p": "{xs} {xl}",
            "variant": "button-contained"
        },
        "saved-link-outline": {
            "p": "{xs} {xl}",
            "variant": "button-outline"
        },
        "saved-link-text": {
            "p": "{xs} {xl}",
            "variant": "button-text"
        },
        "saved-menu-panel-list-item": {
            "fontFamily": "secondary",
            "fontSize": {
                "<lg": "font-size-16",
                "lg": "font-size-16"
            },
            "letterSpacing": "unset",
            "lineHeight": {
                "<lg": "lineheight-sm",
                "lg": "lineheight-sm"
            },
            "textTransform": "none"
        },
        "saved-menu-panel-menu-button": {
            "fontFamily": "secondary",
            "fontSize": "font-size-16",
            "lineHeight": "lineheight-sm",
            "textTransform": "unset"
        },
        "saved-menu-panel-menu-header": {
            "color": "greyXdark",
            "fontFamily": "secondary",
            "fontSize": {
                "<lg": "font-size-16",
                "lg": "font-size-16"
            },
            "lineHeight": {
                "<lg": "lineheight-sm",
                "lg": "lineheight-sm"
            },
            "textAlign": "left",
            "textTransform": "uppercase"
        },
        "saved-menu-panel-search-input-field": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-14"
        },
        "saved-page-headline": {
            "variant": "headline-secondary"
        },
        "saved-page-headline-wrapper": {
            "margin": "{m} auto 0",
            "text-align": "center",
            "width": "fit-content"
        },
        "saved-recipe-find-more-link": {
            "p": "{xs} {m}",
            "variant": "button-outline"
        },
        "saved-recipe-find-more-link-wrapper": {
            "marginBottom": "10rem",
            "marginTop": "l"
        },
        "saved-recipe-items-wrapper": {
            "paddingBottom": "l"
        },
        "saved-recipe-page-wrapper": {
            "marginBottom": "xl"
        },
        "saved-recipe-save-button": {
            "bg": "brandColorSenary"
        },
        "saved-recipe-save-button-icon": {
            "path": {
                "fill": "transparent",
                "stroke": "black",
                "strokeWidth": "0.35rem"
            }
        },
        "saved-save-modal-list-item": {
            "fontSize": "font-size-16",
            "letterSpacing": "0",
            "lineHeight": "lineheight-sm"
        },
        "saved-title": {
            "variant": "saved-headline-title"
        },
        "saved-toggle-menu-arrow": {
            "borderColor": "greyXdark"
        },
        "saved-toggle-menu-label": {
            "color": "greyXdark",
            "variant": "label-header-primary"
        },
        "saved-tooltip": {
            "textAlign": "left",
            "variant": "small-specs-label-text-primary"
        },
        "saved-tooltip-button-text": {
            "backgroundColor": "unset",
            "color": "greyXXdark",
            "marginTop": "0.5rem",
            "padding": "0",
            "variant": "button-text"
        },
        "saved-tooltip-link": {
            "&:hover": {
                "color": "black",
                "textDecorationColor": "border-link-body-hover"
            },
            "color": "inherit",
            "textDecoration": "underline",
            "textDecorationColor": "inherit",
            "textDecorationThickness": "0.0625rem",
            "textUnderlineOffset": "0.25rem",
            "transition": "color 0.3s ease-in-out"
        },
        "scroll-down-text": {
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-16",
            "lineHeight": "lineheight-base"
        },
        "search-input-button": {
            "marginLeft": "xxs",
            "marginTop": "0",
            "variant": "button-contained"
        },
        "search-input-button-icon": {
            "primary": [
                "black",
                "white"
            ]
        },
        "search-input-container": {},
        "search-input-field": {
            "bg": "greyXlight",
            "border": "none",
            "borderBottom": "border-thin-greyDark",
            "height": "2.6rem",
            "variant": "overlay-item-text"
        },
        "search-nav-button-icon": {
            "&:hover": {
                "border": "0"
            },
            "border": "0"
        },
        "search-nav-close-icon": {
            "primary": "brandColorQuinary"
        },
        "search-nav-container": {
            "borderBottom": "border-xs-brand-quinary",
            "div": {
                "&:focus-within": {
                    "outline": "0"
                },
                "border": "0",
                "borderBottom": "border-none-transparent"
            },
            "top": {
                "lg": "3.2rem",
                "xxs:md": "3.7rem"
            }
        },
        "search-nav-input-field": {
            "variant": "button-secondary"
        },
        "search-nav-input-icon": {
            "primary": "brandColorQuinary"
        },
        "search-overlay-list-container": {
            "boxShadow": "shadow-modal"
        },
        "search-overlay-list-item": {
            "variant": "overlay-item-text"
        },
        "search-overlay-list-item-selected": {
            "paddingX": "xxxs",
            "variant": "overlay-item-text"
        },
        "search-results-count": {
            "variant": "body-primary"
        },
        "share-social-button": {
            "&img": {
                "primary": "white"
            }
        },
        "share-social-button-icon": {
            "height": "{iconSize.xs}",
            "primary": "white",
            "width": "{iconSize.xs}"
        },
        "side-panel-menu": {
            "variant": "menu-primary"
        },
        "side-panel-search-button": {
            "height": "iconSize.xxs",
            "width": "iconSize.xxs"
        },
        "side-panel-search-text": {
            "color": "sidepanel-text",
            "textTransform": "none",
            "variant": "menu-primary"
        },
        "side-panel-sub-menu": {
            "variant": "menu-primary"
        },
        "sidepanel-close-btn": {
            "border": "0"
        },
        "sidepanel-close-icon": {
            "primary": "black"
        },
        "skip-link-button": {
            "padding": "xs",
            "textAlign": "center",
            "variant": "button-outline"
        },
        "skip-link-products": {
            "alignItems": "center",
            "display": "inline-flex",
            "padding": "xs",
            "textAlign": "center",
            "variant": "button-outline"
        },
        "skip-link-table-of-contents-li-item": {
            "&:last-of-type": {
                "mb": "0",
                "pb": "0"
            },
            "fontFamily": "primary",
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-sm",
            "margin": "0 0 0.75rem"
        },
        "skip-link-table-of-contents-li-item-link": {
            "border": "border-none-transparent",
            "color": "black",
            "textDecoration": "underline",
            "textUnderlineOffset": "0.125rem"
        },
        "skip-link-table-of-contents-title": {
            "borderBottom": "border-xxs-black",
            "display": "inline-block",
            "fontFamily": "secondary",
            "fontSize": "font-size-20",
            "letterSpacing": "letter-spacing-8",
            "lineHeight": "lineheight-sm",
            "margin": "0",
            "marginLeft": {
                "<sm": "1.8rem",
                "lg": "1.2rem",
                "md": "1.2rem"
            },
            "mb": "m",
            "ml": {
                "<md": "m",
                "lg": "1.2rem",
                "md": "1.2rem"
            },
            "pb": "0.2rem",
            "textTransform": "uppercase",
            "width": "fit-content"
        },
        "skip-link-table-of-contents-wrapper": {
            "bg": {
                "_": "brandColorTertiary",
                "md": "unset",
                "xxs": "brandColorTertiary"
            },
            "border": {
                "md": "border-thin-grey",
                "xxs": "none"
            },
            "borderColor": {
                "md": "black"
            },
            "marginX": {
                "md": "0",
                "xxs": "-15px"
            },
            "marginY": "s",
            "padding": {
                "_": "{l} 0.938rem 2.5rem",
                "md": "{l} 1.5rem 2.2rem",
                "xxs": "{l} 0.938rem 2.5rem"
            }
        },
        "skip-to-content-link": {
            "border": "border-medium-white",
            "boxShadow": "0 0 0 3px #55adff",
            "variant": "button-quaternary"
        },
        "skip-to-section-link-anchor": {
            "a": {
                "transition": "color 0.3s ease-in-out"
            },
            "a:hover": {
                "color": "greyXdark"
            },
            "variant": "button-secondary"
        },
        "skip-to-section-link-nav-container": {
            "borderBottom": "border-thin-grey",
            "borderTop": "border-thin-grey"
        },
        "social-link-list-menu-title": {
            "fontFamily": "BodySanSerif"
        },
        "social-link-list-tooltip": {
            "fontFamily": "BodySanSerif"
        },
        "sponsor-bar": {
            "variant": "ad-text-primary"
        },
        "sponsor-label": {
            "mb": "xxs",
            "textTransform": "none",
            "variant": "label-secondary"
        },
        "sponsor-logo-separator": {
            "color": "greyXXXdark",
            "p": "0 {xs} 0 {s}",
            "variant": "ad-text-primary"
        },
        "spotlight-details": {
            "alignSelf": "flex-end",
            "background": "transparent",
            "m": {
                "_": "0 auto {s}",
                "md": "0 auto {m}"
            },
            "px": {
                "_": "s",
                "md": "xl"
            },
            "textAlign": "center"
        },
        "spotlight-hed": {
            "&:hover": {
                "color": "brandColorPrimary",
                "transition": "color 0.3s ease-in-out"
            },
            "mt": "-{s}",
            "p": "{m} {xs}",
            "variant": "subheadline-secondary"
        },
        "spotlight-label": {
            "variant": "label-primary"
        },
        "spotlight-logo": {
            "& img": {
                "height": "1.6rem"
            }
        },
        "star-rating-link": {
            "textTransform": "uppercase",
            "variant": "byline-primary"
        },
        "star-rating-text-container": {
            "ml": "xxxs"
        },
        "star-rating-value": {
            "textTransform": "uppercase",
            "variant": "byline-primary"
        },
        "star-rating-wrapper": {
            "marginY": "xs"
        },
        "sticky-list-container": {
            "bg": "unset",
            "li": {
                "flex": "1"
            },
            "m": {
                "<sm": "0",
                "sm": "0 2.5rem",
                "xxlg": "0 auto"
            },
            "ul": {
                "flex": "1",
                "gap": "0",
                "pb": "{*sizes.primitive-6}"
            }
        },
        "sticky-list-container-wrapper": {
            "borderBottom": "border-mlg-black",
            "height": "74px"
        },
        "sticky-list-item-link": {
            "&:after": {
                "color": "gray-400",
                "content": "'|'",
                "fontSize": "font-size-16",
                "pl": "{*sizes.primitive-20}",
                "position": "absolute",
                "right": "0"
            },
            "&:hover": {
                "transition": "all 0.3s ease-in-out"
            },
            "flex": "1 0",
            "fontFamily": "MenuPrimary",
            "justifyContent": "center",
            "lineHeight": "lineheight-base",
            "padding": "0 {*sizes.primitive-20}",
            "position": "relative"
        },
        "sticky-list-left-arrow-button": {
            "height": "100%"
        },
        "sticky-list-right-arrow-button": {
            "height": "calc(100% - 8px)"
        },
        "sticky-list-wrapper": {
            "& > ul > li:first-of-type": {
                "marginLeft": {
                    "<xs": "0"
                }
            },
            "li:last-child > a": {
                "padding": {
                    "<sm": "0 {*sizes.primitive-4} 0 {*sizes.primitive-20}"
                }
            },
            "li:last-child > a:after": {
                "display": "none"
            }
        },
        "sticky-wrapper": {
            "mb": {
                "<sm": "s",
                "sm": "m"
            }
        },
        "summary-view-container": {
            "marginY": "m"
        },
        "summary-view-headline": {
            "variant": "title-tertiary"
        },
        "summary-view-load-more-button": {
            "variant": "button-load-more-primary"
        },
        "summary-view-product-brand": {
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-14",
            "fontWeight": "bold",
            "lineHeight": "lineheight-xlg"
        },
        "summary-view-product-button": {
            "variant": "button-primary"
        },
        "summary-view-product-button-container": {
            "marginY": {
                "lg": "0",
                "md": "xs",
                "xxs": "xs"
            }
        },
        "summary-view-product-custom-tag": {
            "marginBottom": "xxs",
            "variant": "label-tag-primary"
        },
        "summary-view-product-discount": {
            "color": "globalColorDiscount",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-14",
            "fontWeight": "bold",
            "lineHeight": "lineheight-xlg",
            "paddingTop": "xxs"
        },
        "summary-view-product-image-container": {},
        "summary-view-product-info": {},
        "summary-view-product-read-more": {
            "color": "black",
            "marginTop": "xxs",
            "variant": "body-quaternary"
        },
        "summary-view-product-read-more-arrow": {
            "height": "0.75rem",
            "marginTop": "0.05rem"
        },
        "summary-view-product-slide-number": {
            "fontFamily": "TitlePrimary",
            "fontSize": "font-size-50",
            "lineHeight": {
                "-": "lineheight-xsmall",
                "<sm": "lineheight-base"
            }
        },
        "summary-view-product-title": {
            "fontFamily": "secondary",
            "fontSize": "font-size-24",
            "fontWeight": "400",
            "lineHeight": {
                "<sm": "lineheight-sm",
                "lg": "lineheight-sm",
                "md": "lineheight-sm"
            },
            "marginBottom": {
                "<sm": "xs",
                "md": "xs"
            },
            "marginTop": {
                "<sm": "xxs",
                "md": "xs"
            },
            "paddingRight": "s"
        },
        "summary-view-product-title-anchor": {
            "&:hover": {
                "color": "greyXXdark",
                "transition": "all 0.3s ease-in-out"
            }
        },
        "summary-view-product-wrapper": {
            "borderBottom": "border-thin-greyDark"
        },
        "summary-view-wrapper": {
            "marginBottom": "xxs"
        },
        "syndicated-link-link": {
            "variant": "body-primary"
        },
        "syndicated-link-text": {
            "variant": "body-primary"
        },
        "text-block-container": {
            "bg": "bg-block-content-text",
            "p": "0 {s}"
        },
        "three-column": {
            "bg": "bg-block-three-col"
        },
        "unsave-button-icon": {
            "primary": [
                "black",
                "white"
            ]
        },
        "vertical-playlist-item-title": {
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-18",
            "lineHeight": "lineheight-sm"
        },
        "vertical-playlist-title": {
            "display": "block",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-15",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-base",
            "textTransform": "uppercase"
        },
        "video-hub-byline": {
            "variant": "byline-primary"
        },
        "video-hub-title": {
            "variant": "item-title-stacked-feature-big-story-feed"
        },
        "watch-next-player-inner-wrapper-in-body": {
            "border": "border-thin-grey",
            "borderWidth": "0.0625rem 0 0"
        },
        "watch-next-player-title": {
            "borderBottom": "border-xxs-black",
            "m": "0 auto",
            "variant": "label-tertiary",
            "width": "fit-content"
        },
        "watch-next-player-title-in-body": {
            "variant": "label-quinary"
        },
        "watch-next-player-video-title": {
            "variant": "headline-quaternary"
        },
        "watch-next-player-video-title-in-body": {
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-16",
                "md": "font-size-18"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-3",
            "lineHeight": {
                "<md": "lineheight-sm",
                "md": "lineheight-md"
            },
            "p": "{xs} 0"
        },
        "watch-next-player-wrapper": {
            "my": "l"
        },
        "wide-marquee-content": {
            "bottom": {
                "_": "-2rem",
                "lg": "-0.7rem",
                "sm": "0"
            },
            "m": "0 auto"
        },
        "wide-marquee-label": {
            "margin": "{xs} auto",
            "variant": "label-tag-primary"
        },
        "wide-marquee-label-container": {},
        "wide-marquee-title": {
            "bg": "white",
            "display": {
                "_": "block",
                "sm": "unset"
            },
            "fontFamily": "primary",
            "lineHeight": "lineheight-base",
            "p": {
                "_": "s",
                "sm": "{xxs} {xs}"
            },
            "textAlign": "left",
            "textTransform": "uppercase",
            "variant": "headline-secondary"
        },
        "wide-marquee-title-only": {
            "my": "0",
            "variant": "headline-secondary"
        }
    },
    "variants": {
        "action-buttons-text-only": {
            "marginRight": {
                "xxs:xxxlg": "6px 0 0 0"
            }
        },
        "ad-leaderboard-wrapper": {
            "minHeight": {
                "md": "121px"
            }
        },
        "ad-text-primary": {
            "a": {
                "&:hover": {
                    "color": "color-link-body-hover",
                    "textDecorationColor": "border-link-body-hover"
                },
                "color": "inherit",
                "textDecoration": "underline",
                "textDecorationColor": "inherit",
                "textDecorationThickness": "0.0625rem",
                "textUnderlineOffset": "0.25rem",
                "transition": "color 0.3s ease-in-out"
            },
            "fontFamily": "AdTextPrimary",
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-md",
            "textTransform": "none"
        },
        "ad-wrapper": {
            "minHeight": {
                "_": "523px",
                "md": "138px"
            }
        },
        "ads-free-action-button-wrapper": {
            "alignItems": "baseline",
            "display": "flex",
            "justifyContent": "center",
            "margin": "auto",
            "paddingTop": "0.9375rem"
        },
        "ads-free-action-buttons": {
            "margin": "auto"
        },
        "ads-free-breadcrumb": {
            "marginLeft": "auto",
            "marginTop": "s",
            "padding": {
                "xxs:xxxlg": "initial"
            },
            "pl": {
                "sm": "auto",
                "xxs:xxxlg": "auto"
            },
            "textAlign": "center"
        },
        "ads-free-byline": {
            "marginRight": "0.625rem",
            "paddingRight": "0.3125rem"
        },
        "ads-free-byline-container": {
            "alignItems": "baseline",
            "display": "flex",
            "flexDirection": {
                "sm": "row",
                "xxs": "column"
            },
            "flexWrap": {
                "sm": "wrap",
                "xxs": "wrap"
            },
            "justifyContent": "center"
        },
        "ads-free-content-dek": {
            "textAlign": "center"
        },
        "ads-free-content-header": {
            "maxWidth": {
                "lg": "67.5rem",
                "md": "calc(49.625rem * 2 - 1rem)",
                "sm": "calc(32.625rem * 2 - 1rem)",
                "smd": "calc(32.625rem * 2 - 1rem)",
                "xlg": "calc(20.625rem * 2 - 1rem)",
                "xs": "calc(15.925rem * 2 - 1rem)",
                "xxlg": "calc(42rem * 2 - 1rem)",
                "xxs": "calc(10rem * 2 - 1rem)",
                "xxxlg": "calc(47.25rem * 2 - 1rem)"
            },
            "p": {
                "xxs:xxxlg": "6px 0 0 0"
            },
            "textAlign": "center"
        },
        "ads-free-enhanced-byline-container": {
            "margin": {
                "xxs:xxxlg": "auto"
            }
        },
        "ads-free-enhanced-byline-wrapper": {
            "justifyContent": "center",
            "margin": {
                "xxs:xxxlg": "auto"
            }
        },
        "ads-free-publish-date": {
            "marginLeft": "0"
        },
        "ads-free-verifier-job-title": {
            "marginLeft": {
                "<sm": "auto",
                "sm": "auto"
            },
            "paddingLeft": {
                "<sm": "initial",
                "sm": "initial"
            }
        },
        "big-story-feed-column-column-stacked": {
            "gridGap": "xxs"
        },
        "block-header-column-before-title-three-column": {
            "_defaults": false,
            "backgroundImage": [
                "/static/images/Clover.svg",
                {
                    "defaults": false
                },
                {
                    "scope": "@brand"
                }
            ],
            "backgroundRepeat": "no-repeat",
            "bottom": "-{xs}",
            "content": "''",
            "display": "block",
            "height": "1.25rem",
            "lineHeight": "lineheight-base",
            "margin": "0 auto {m}",
            "position": "relative",
            "width": "1.25rem"
        },
        "block-header-stacked-big-story-feed": {
            "backgroundImage": "linear-gradient(to right, #add8e6 0.063rem, transparent 0.063rem),linear-gradient(to bottom, #add8e6 0.063rem, transparent 0.063rem)",
            "backgroundSize": {
                "<sm": "0.875rem 0.875rem",
                "lg": "0.969rem 0.969rem",
                "md": "0.781rem 0.781rem",
                "sm": "0.875rem 0.875rem"
            },
            "bg": "transparent",
            "borderTop": "border-institute",
            "bps": [
                {
                    "options": {
                        "size": "lg"
                    },
                    "value": {
                        "fontSize": "4.84903"
                    }
                }
            ],
            "fontWeight": "bold",
            "h2": {
                "borderBottom": "border-none-transparent",
                "fontSize": {
                    "<sm": "font-size-56",
                    "lg": "5",
                    "md": "font-size-56",
                    "sm": "font-size-56"
                },
                "lineHeight": {
                    "<sm": "lineheight-base",
                    "lg": "lineheight-base",
                    "md": "lineheight-base",
                    "sm": "lineheight-base"
                },
                "mb": "0",
                "textAlign": "center"
            },
            "lineHeight": "lineheight-base",
            "mb": "0",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "p": "{l} 0",
            "textAlign": "center",
            "top": {
                "lg": "m"
            },
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "block-header-stacked-big-story-feed-design-element-after": {
            "_defaults": true,
            "backgroundImage": [
                "/static/images/institute-star.svg",
                {
                    "defaults": false
                },
                {
                    "scope": "@brand"
                }
            ],
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "1rem",
            "content": "''",
            "display": "block",
            "height": "1rem",
            "m": "{xs} 0 0",
            "width": "auto"
        },
        "block-header-stacked-big-story-feed-design-element-before": {
            "&:before": {
                "_defaults": false,
                "backgroundImage": [
                    "/static/images/institute-logo-tbf.svg",
                    {
                        "defaults": false
                    },
                    {
                        "scope": "@brand"
                    }
                ],
                "backgroundPosition": "center center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": {
                    "<sm": "7rem",
                    "lg": "9rem",
                    "md": "9rem",
                    "sm": "7rem"
                },
                "bottom": "0.688rem",
                "content": "''",
                "display": "block",
                "height": {
                    "<sm": "7rem",
                    "lg": "9rem",
                    "md": "9rem",
                    "sm": "7rem"
                },
                "mb": "s",
                "mr": "0",
                "mt": {
                    "<sm": "-1.375rem",
                    "lg": "-1.438rem",
                    "md": "-1.438rem",
                    "sm": "-1.375rem"
                },
                "width": "auto"
            }
        },
        "body-2xl": {
            "fontSize": {
                "<sm": "font-size-60",
                "lg": "font-size-80",
                "md": "font-size-60"
            },
            "lineHeight": {
                "<sm": "lineheight-base",
                "lg": "lineheight-base",
                "md": "lineheight-base"
            }
        },
        "body-2xs": {
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-sm"
        },
        "body-3xl": {
            "fontSize": {
                "<sm": "font-size-60",
                "lg": "font-size-96",
                "md": "font-size-60"
            },
            "lineHeight": {
                "<sm": "lineheight-base",
                "lg": "lineheight-base",
                "md": "lineheight-base"
            }
        },
        "body-3xs": {
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-sm"
        },
        "body-4xs": {
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-sm"
        },
        "body-l": {
            "fontSize": {
                "<sm": "font-size-22",
                "lg": "font-size-24",
                "md": "font-size-22"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-sm",
                "md": "lineheight-xs"
            }
        },
        "body-m": {
            "fontSize": "font-size-19",
            "lineHeight": "lineheight-xxlg"
        },
        "body-primary": {
            "& em": {
                "fontFamily": "BodyPrimary",
                "fontStyle": "italic"
            },
            "& strong": {
                "fontFamily": "BodyPrimary",
                "fontWeight": "bold"
            },
            "fontFamily": "BodyPrimary",
            "fontSize": "font-size-19",
            "lineHeight": "lineheight-xxlg"
        },
        "body-quaternary": {
            "fontFamily": "secondary",
            "fontSize": "font-size-12",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-1",
            "lineHeight": "lineheight-sm",
            "textTransform": "uppercase"
        },
        "body-s": {
            "fontSize": "font-size-18",
            "lineHeight": "lineheight-sm"
        },
        "body-secondary": {
            "& em": {
                "fontFamily": "BodyTertiary",
                "fontStyle": "italic"
            },
            "fontFamily": "BodyPrimary",
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-lg"
        },
        "body-tertiary": {
            "fontFamily": "secondary",
            "fontSize": "font-size-12",
            "letterSpacing": "letter-spacing-4",
            "lineHeight": "lineheight-xs"
        },
        "body-xl": {
            "fontSize": {
                "<sm": "font-size-28",
                "lg": "font-size-36",
                "md": "font-size-28"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "body-xs": {
            "fontSize": "font-size-16",
            "lineHeight": "lineheight-sm"
        },
        "breadcrumb-left-align": {
            "padding": {
                "lg": "1.25rem 0 0",
                "md": "1.25rem 0 0",
                "sm": "1.25rem 0 0 0",
                "smd": "1.25rem 0 0",
                "xlg": "1.25rem 0 0",
                "xxlg": "1.25rem 0 0",
                "xxxlg": "1.25rem 0 0"
            },
            "paddingLeft": {
                "sm": "0",
                "xs": "0",
                "xxs": "0"
            }
        },
        "breadcrumbs-link-primary": {
            "&:hover": {
                "color": "black",
                "textDecoration": "underline",
                "textDecorationThickness": "0.0625rem",
                "textUnderlineOffset": "0.25rem"
            },
            "textDecoration": "underline",
            "textDecorationThickness": "0.0625rem",
            "textUnderlineOffset": "0.25rem",
            "transition": "all 0.3s ease-in-out"
        },
        "breadcrumbs-primary": {
            "color": "greyXXdark",
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-md"
        },
        "button-contained": {
            "&:focus": {
                "outline": "outline-focus-black",
                "outlineOffset": "outline-offset-s"
            },
            "&:hover": {
                "bg": "black",
                "border": "border-thin-transparent",
                "svg > path": {
                    "fill": "white",
                    "stroke": "white"
                }
            },
            "bg": "brandColorSenary",
            "border": "border-thin-transparent",
            "borderRadius": "0.125rem",
            "color": "black",
            "fontFamily": "tertiary",
            "fontSize": {
                "<sm": "font-size-11",
                "_": "font-size-13"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": {
                "<sm": "line-height-md",
                "_": "line-height-md"
            },
            "svg > path": {
                "fill": "black",
                "stroke": "black",
                "transition": "0.3s ease-in-out fill"
            },
            "textDecoration": "none",
            "textTransform": "uppercase",
            "transition": "all 0.3s ease-in-out",
            "width": "auto"
        },
        "button-cta-link-embed-gallery": {
            "a.body-btn-link": {
                "&:hover": {
                    "bg": "brandColorSenary",
                    "color": "black"
                },
                "bg": "black",
                "borderRadius": "0.125rem",
                "color": "white",
                "display": "inline-block",
                "fontFamily": "tertiary",
                "fontSize": "font-size-13",
                "letterSpacing": "letter-spacing-6",
                "lineHeight": "lineheight-base",
                "p": "0.6rem 1rem",
                "textTransform": "uppercase",
                "transition": "background 0.3s ease-in-out, color 0.3s ease-in-out"
            }
        },
        "button-cta-link-listicle-intro": {
            "a.body-btn-link": {
                "&:hover": {}
            }
        },
        "button-cta-link-overlay": {
            "a": {
                "&:hover": {
                    "color": "grey",
                    "textDecorationColor": "grey"
                },
                "color": "white",
                "textDecorationColor": "white"
            },
            "a.body-btn-link": {
                "&:hover": {
                    "bg": "white",
                    "color": "black"
                },
                "bg": "grey"
            }
        },
        "button-discount-contained": {
            "&:hover": {
                "bg": "bg-discount",
                "border": "unset"
            },
            "bg": "bg-discount",
            "border": "unset",
            "fontFamily": "LabelPrimary",
            "outline": "0.125rem dotted {*colors.greenDark}",
            "textTransform": "uppercase"
        },
        "button-discount-contained-OnDark": {
            "&:hover": {
                "bg": "bg-discount-onDark",
                "border": "unset"
            },
            "bg": "bg-discount-onDark",
            "border": "unset",
            "borderRadius": "0.125rem",
            "fontFamily": "tertiary",
            "fontSize": "font-size-13",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-md",
            "outline": "0.125rem dotted {*colors.greenLight}",
            "textTransform": "uppercase"
        },
        "button-discount-outline": {
            "&:hover": {
                "bg": "bg-discount",
                "border": "unset"
            },
            "bg": "unset",
            "border": "unset",
            "color": "text-discount",
            "fontFamily": "LabelPrimary",
            "outline": "0.125rem dotted {*colors.greenDark}",
            "textTransform": "uppercase"
        },
        "button-discount-outline-OnDark": {
            "&:hover": {
                "bg": "bg-discount-onDark",
                "border": "unset"
            },
            "bg": "unset",
            "border": "unset",
            "borderRadius": "0.125rem",
            "color": "text-discount-onDark",
            "fontFamily": "tertiary",
            "fontSize": "font-size-13",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-md",
            "outline": "0.125rem dotted {*colors.greenLight}",
            "textTransform": "uppercase"
        },
        "button-load-more-primary": {
            "&:hover": {
                "bg": "greyLight"
            },
            "bg": "white",
            "border": "border-thin-black",
            "borderRadius": "xxxs",
            "color": "black",
            "fontFamily": "LabelPrimary",
            "textTransform": "uppercase",
            "transition": "all 0.3s ease-in-out",
            "width": "100%"
        },
        "button-outline": {
            "&:focus": {
                "outline": "outline-focus-black",
                "outlineOffset": "outline-offset-s"
            },
            "&:hover": {
                "bg": "greyLight",
                "border": "border-thin-black",
                "color": "black"
            },
            "bg": "white",
            "border": "border-thin-black",
            "borderRadius": "0",
            "color": "black",
            "fontFamily": "tertiary",
            "fontSize": {
                "<sm": "font-size-11",
                "_": "font-size-13"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": {
                "<sm": "line-height-md",
                "_": "line-height-md"
            },
            "svg > path": {
                "fill": "black"
            },
            "textDecoration": "none",
            "textTransform": "uppercase",
            "transition": "all 0.3s ease-in-out",
            "width": "auto"
        },
        "button-primary": {
            "&:hover": {
                "bg": "black"
            },
            "bg": "brandColorSenary",
            "borderRadius": "0.125rem",
            "color": "black",
            "fontFamily": "tertiary",
            "fontSize": "font-size-13",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-base",
            "p": "0.6rem 1rem",
            "textTransform": "uppercase",
            "transition": "background 0.3s ease-in-out, color 0.3s ease-in-out",
            "width": "auto"
        },
        "button-quaternary": {
            "bg": "black",
            "borderRadius": "l",
            "fontFamily": "AdTextPrimary",
            "fontSize": "font-size-14",
            "fontWeight": "bold",
            "lineHeight": "lineheight-base",
            "p": "{xs} {m}",
            "width": "auto"
        },
        "button-secondary": {
            "&:hover": {
                "color": "greyXXdark"
            },
            "color": "black",
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-11",
                "_": "font-size-13"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "pl": "xxs",
            "textTransform": "uppercase",
            "transition": "color 0.3s ease-in-out"
        },
        "button-text": {
            "&:focus": {
                "outline": "outline-focus-black",
                "outlineOffset": "outline-offset-s"
            },
            "&:hover": {
                "background": "none",
                "color": "greyXXdark",
                "textDecorationColor": "greyXXdark"
            },
            "bg": "transparent",
            "color": "black",
            "fontFamily": "tertiary",
            "fontSize": {
                "<sm": "font-size-11",
                "_": "font-size-13"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": {
                "<sm": "line-height-md",
                "_": "line-height-md"
            },
            "textDecoration": "underline",
            "textDecorationThickness": "0.0625rem",
            "textTransform": "uppercase",
            "textUnderlineOffset": "0.25rem",
            "transition": "all 0.3s ease-in-out",
            "width": "auto"
        },
        "byline-capitalize-primary": {
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-md",
            "textTransform": "capitalize"
        },
        "byline-link-primary": {
            "&:hover": {
                "color": "black",
                "textDecoration": "underline",
                "textDecorationThickness": "0.0625rem",
                "textUnderlineOffset": "0.25rem"
            },
            "textDecoration": "underline",
            "textDecorationThickness": "0.0625rem",
            "textUnderlineOffset": "0.25rem",
            "transition": "all 0.3s ease-in-out"
        },
        "byline-lowercase-primary": {
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-md",
            "textTransform": "lowercase"
        },
        "byline-primary": {
            "fontFamily": "BylinePrimary",
            "fontSize": {
                "<sm": "font-size-12",
                "lg": "font-size-12",
                "md": "font-size-12",
                "sm": "font-size-12"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs",
                "sm": "lineheight-xs"
            },
            "pt": "xxs",
            "textTransform": "uppercase"
        },
        "byline-transform-none-primary": {
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-md",
            "textTransform": "none"
        },
        "byline-uppercase-primary": {
            "fontFamily": "BylinePrimary",
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-md",
            "textTransform": "uppercase"
        },
        "content-header-byline-image-left-right-name": {
            "display": "inline-block",
            "pt": "0"
        },
        "content-header-byline-image-left-right-wrapper": {
            "pt": "0"
        },
        "content-header-byline-text-only-name": {
            "display": "inline-block",
            "pt": "0"
        },
        "content-header-byline-text-only-wrapper": {
            "pt": "0"
        },
        "content-header-byline-text-under-name": {
            "display": "inline-block",
            "pt": "0"
        },
        "content-header-text-only": {
            "m": {
                "md": "center",
                "sm": "0 2rem",
                "xxs:xs": "0 1rem",
                "xxxlg": "center",
                "xxxxlg": "center"
            },
            "margin": {
                "lg": "0 auto",
                "md": "0 auto",
                "sm": "0 1rem",
                "smd": "0",
                "xlg": "0 auto",
                "xxlg": "0 auto",
                "xxxlg": "auto"
            },
            "marginLeft": {
                "lg": "calc((100vw - calc(20.625rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "smd": "calc((100vw - calc(20.625rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xlg": "calc((100vw - calc(20.625rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xxlg": "calc((100vw - calc(20.625rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xxxlg": "calc((100vw - calc(20.625rem * 2 - 1rem)) / 2)"
            },
            "maxWidth": {
                "lg": "40.25rem",
                "lg>": "calc(20.625rem * 2 - 1rem)",
                "md": "40.25rem",
                "md:smd": "45.25rem",
                "sm": "calc(100vw - (1rem * 2))",
                "smd": "calc(20.625rem * 2 - 1rem)",
                "xlg": "calc(20.625rem * 2 - 1rem)",
                "xxlg": "calc(20.625rem * 2 - 1rem)",
                "xxxlg": "calc(20.625rem * 2 - 1rem)"
            },
            "ml": {
                "_": "{xs}",
                "lg": "calc((100vw - calc(19.1rem * 2 - 1rem) - 1rem - 29.625rem) / 2)",
                "md": "{xs}",
                "sm": "{xs}",
                "smd": "{xs}",
                "xlg": "calc((100vw - calc(19.1rem * 2 - 1rem) - 1rem - 39.625rem) / 2)",
                "xs": "{xs}",
                "xxlg": "calc((100vw - calc(18.2rem * 2 - 1rem) - 1rem - 35.625rem) / 2)",
                "xxs": "{xs}",
                "xxxlg": "calc((100vw - calc(21.5rem * 2 - 1rem) - 1rem - 42.625rem) / 2)"
            },
            "p": {
                "lg>": "0 1rem",
                "sm": "0",
                "smd": "1rem 1rem",
                "xxs:xxxlg": "{xs} 0 0 0",
                "xxxxlg": "0 1rem"
            },
            "padding": {
                "lg": "0 1rem",
                "md": "0 1rem",
                "sm": "0",
                "smd": "0 1rem",
                "xlg": "0 1rem",
                "xxlg": "0 1rem",
                "xxxlg": "0 1rem"
            },
            "textAlign": "left"
        },
        "content-header-text-only-embedded": {
            "margin": {
                "lg": "0 auto",
                "md": "0 auto",
                "sm": "0 1rem",
                "smd": "0",
                "xlg": "0 auto",
                "xxlg": "0 auto",
                "xxxlg": "auto"
            },
            "marginLeft": {
                "lg": "calc((100vw - 59.625rem) / 2)",
                "smd": "calc((100vw - 40.225rem) / 2)",
                "xlg": "calc((100vw - 58.825rem) / 2)",
                "xxlg": "calc((100vw - 57.025rem) / 2)",
                "xxxlg": "calc((100vw - 42rem) / 2)"
            },
            "maxWidth": {
                "lg": "40.25rem",
                "md": "40.25rem",
                "smd": "40.25rem",
                "xlg": "40.25rem",
                "xxlg": "40.25rem",
                "xxxlg": "40.25rem"
            },
            "padding": {
                "lg": "0 1rem",
                "md": "0 1rem",
                "sm": "0",
                "smd": "0 1rem",
                "xlg": "0 1rem",
                "xxlg": "0 1rem",
                "xxxlg": "0 1rem"
            },
            "textAlign": "left"
        },
        "content-header-text-only-lead-image": {
            "margin": {
                "lg": "0 auto",
                "md": "0 auto",
                "sm": "0 1rem",
                "smd": "0",
                "xlg": "0 auto",
                "xxlg": "0 auto",
                "xxxlg": "auto"
            },
            "marginLeft": {
                "lg": "calc((100vw - calc(19.5rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "smd": "calc((100vw - calc(9.8rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xlg": "calc((100vw - calc(19.1rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xxlg": "calc((100vw - calc(18.2rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xxxlg": "calc((100vw - calc(21.5rem * 2 - 1rem)) / 2)"
            },
            "maxWidth": {
                "lg": "40.25rem",
                "md": "40.25rem",
                "smd": "calc(20.625rem * 2 - 1rem)",
                "xlg": "calc(20.625rem * 2 - 1rem)",
                "xxlg": "calc(20.625rem * 2 - 1rem)",
                "xxxlg": "calc(20.625rem * 2 - 1rem)"
            },
            "padding": {
                "lg": "0 1rem",
                "md": "0 1rem",
                "sm": "0",
                "smd": "0 1rem",
                "xlg": "0 1rem",
                "xxlg": "0 1rem",
                "xxxlg": "0 1rem"
            },
            "textAlign": "left"
        },
        "dek-primary": {
            "color": "black",
            "fontFamily": "DekPrimary",
            "fontSize": {
                "<sm": "font-size-14",
                "lg": "font-size-16",
                "md": "font-size-16",
                "sm": "font-size-14"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "<sm": "lineheight-md",
                "lg": "lineheight-md",
                "md": "lineheight-md",
                "sm": "lineheight-md"
            },
            "pb": {
                "<sm": "xs",
                "lg": "m",
                "md": "s",
                "sm": "xs"
            },
            "textAlign": "center"
        },
        "dropdown-text-primary": {
            "fontFamily": "MenuPrimary",
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-xxlg",
            "textTransform": "capitalize"
        },
        "four-across-block-content-ad": {
            "bps": [
                {
                    "options": {
                        "size": "md"
                    },
                    "value": {
                        "gridGap": "0"
                    }
                },
                {
                    "options": {
                        "size": "<sm"
                    },
                    "value": {
                        "gridGap": "0"
                    }
                }
            ],
            "mt": {
                "lg": "0",
                "sm": "s"
            }
        },
        "four-across-block-content-no-ad": {
            "bps": [
                {
                    "options": {
                        "size": "md"
                    },
                    "value": {
                        "gridGap": "0"
                    }
                },
                {
                    "options": {
                        "size": "<sm"
                    },
                    "value": {
                        "gridGap": "0"
                    }
                }
            ],
            "mt": {
                "lg": "0",
                "sm": "s"
            }
        },
        "four-across-block-longform-article": {
            "&:not(:first-of-type)": {
                "gridRowGap": {
                    "<md": "0",
                    "md": "xs"
                },
                "pt": {
                    "<md": "0",
                    "md": "0"
                }
            }
        },
        "four-across-block-standard-article": {
            "&:not(:first-of-type)": {
                "gridRowGap": {
                    "<md": "0",
                    "md": "xs"
                },
                "pt": {
                    "<md": "0",
                    "md": "0"
                }
            }
        },
        "headline-2xl": {
            "fontSize": {
                "<sm": "font-size-36",
                "lg": "font-size-48",
                "md": "font-size-36"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-sm",
                "md": "lineheight-xs"
            }
        },
        "headline-2xs": {
            "fontSize": "font-size-16",
            "lineHeight": "lineheight-sm"
        },
        "headline-3xl": {
            "fontSize": {
                "<sm": "font-size-48",
                "lg": "font-size-60",
                "md": "font-size-48"
            },
            "lineHeight": {
                "<sm": "lineheight-sm",
                "lg": "lineheight-sm",
                "md": "lineheight-sm"
            }
        },
        "headline-3xs": {
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-sm"
        },
        "headline-l": {
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-28",
                "md": "font-size-24"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "headline-m": {
            "fontSize": {
                "<sm": "font-size-22",
                "lg": "font-size-24",
                "md": "font-size-22"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-sm",
                "md": "lineheight-xs"
            }
        },
        "headline-primary": {
            "color": "black",
            "display": "block",
            "fontFamily": "HeadlinePrimary",
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-30",
                "md": "font-size-30",
                "sm": "font-size-24"
            },
            "fontWeight": "normal",
            "letterSpacing": "letter-spacing-20",
            "lineHeight": {
                "<sm": "sm",
                "lg": "xs",
                "md": "xs",
                "sm": "sm"
            },
            "textAlign": "left",
            "textTransform": "uppercase"
        },
        "headline-quaternary": {
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-23",
                "lg": "font-size-31",
                "md": "font-size-26"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "sm",
                "lg": "xs",
                "md": "xs"
            },
            "mt": {
                "<lg": "xs",
                "lg": "s"
            }
        },
        "headline-quinary": {
            "fontFamily": "TitlePrimary",
            "fontSize": {
                "<sm": "font-size-48",
                "_": "font-size-70"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-1",
            "lineHeight": {
                "<sm": "lineheight-base",
                "_": "lineheight-base"
            }
        },
        "headline-recipe": {
            "fontFamily": "quaternary",
            "fontSize": {
                "<md": "font-size-24",
                "lg": "font-size-24",
                "md": "font-size-26"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-sm",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "headline-s": {
            "fontSize": {
                "<sm": "font-size-20",
                "lg": "font-size-22",
                "md": "font-size-20"
            },
            "lineHeight": {
                "<sm": "lineheight-sm",
                "lg": "lineheight-sm",
                "md": "lineheight-sm"
            }
        },
        "headline-secondary": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-32",
                "lg": "4.68986",
                "md": "font-size-50",
                "sm": "font-size-32"
            },
            "fontWeight": "normal",
            "letterSpacing": "letter-spacing-n3",
            "lineHeight": {
                "<sm": "1",
                "lg": "1",
                "md": "1",
                "sm": "1"
            },
            "p": {
                "<sm": "l",
                "lg": "2rem 1.5rem",
                "md": "{tablet-gutter} {m}",
                "sm": "l"
            },
            "textTransform": "capitalize"
        },
        "headline-sub-recipe": {
            "fontFamily": "primary",
            "fontSize": "font-size-16",
            "fontWeight": "bold",
            "lineHeight": "lineheight-xs",
            "textTransform": "uppercase"
        },
        "headline-tertiary": {
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-34",
                "<sm": "font-size-40",
                "lg": "font-size-50",
                "md": "font-size-45",
                "xlg": "font-size-52"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "xs",
                "<sm": "lineheight-xs",
                "lg": "xxs",
                "md": "xs",
                "xlg": "lineheight-xs"
            }
        },
        "headline-xl": {
            "fontSize": {
                "<sm": "font-size-28",
                "lg": "font-size-36",
                "md": "font-size-28"
            },
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "headline-xs": {
            "fontSize": {
                "<sm": "font-size-18",
                "lg": "font-size-20",
                "md": "font-size-18"
            },
            "lineHeight": {
                "<sm": "lineheight-sm",
                "lg": "lineheight-sm",
                "md": "lineheight-sm"
            }
        },
        "item-ad-three-column": {
            "p": "xxs"
        },
        "item-big-story-feed": {
            "mb": {
                "<sm": "m",
                "md": "m"
            },
            "mt": {
                "lg": "0",
                "md": "l",
                "sm": "m"
            },
            "p": "0",
            "textAlign": "center"
        },
        "item-byline-four-across": {
            "textAlign": "center"
        },
        "item-byline-stacked-basefeed-big-story-feed": {
            "p": "0 {xs}",
            "textAlign": "center"
        },
        "item-byline-stacked-feature-big-story-feed": {
            "color": "black"
        },
        "item-column-right-basefeed-ad-big-story-feed": {
            "gridGap": "0.8",
            "mb": "0",
            "mt": "0"
        },
        "item-content-big-story": {
            "bg": "brandColorTertiary",
            "h2 span": {
                "&:hover": {
                    "color": "link-hover-item-title-primary"
                }
            }
        },
        "item-content-big-story-feed": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "mt": "0",
            "p": "m",
            "textAlign": "center",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-content-column-right-basefeed-big-story-feed": {
            "bg": "bg-block-content-big-story-feed-colright-basefeed",
            "mb": "0",
            "mt": "0"
        },
        "item-content-four-across": {
            "bg": "bg-block-content-four-across",
            "p": "xs",
            "textAlign": "center"
        },
        "item-content-imageright-ad-big-story": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-0.938rem",
                "sm": "0"
            },
            "mt": {
                "<sm": "-0.2rem",
                "md": "0",
                "sm": "0"
            },
            "p": {
                "<sm": "m",
                "md": "0 {m} 0 0",
                "sm": "m"
            },
            "textAlign": "center",
            "width": {
                "<sm": "100vw",
                "md": "100%",
                "sm": "unset"
            }
        },
        "item-content-imageright-big-story": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-0.938rem",
                "sm": "0"
            },
            "mt": {
                "<sm": "-0.2rem",
                "md": "0",
                "sm": "0"
            },
            "p": {
                "<sm": "m",
                "md": "0 {m} 0 0",
                "sm": "m"
            },
            "textAlign": "center",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-content-noimage-ad-big-story": {
            "bg": "bg-block-content-big-story-noimage-ad",
            "p": "0 {s}"
        },
        "item-content-noimage-basefeed-big-story-feed": {
            "bg": "white",
            "borderTop": "border-xxs-grey",
            "pb": "m",
            "pt": "0",
            "textAlign": "center"
        },
        "item-content-noimage-big-story": {
            "bg": "bg-block-content-big-story-noimage"
        },
        "item-content-noimage-feature-big-story-feed": {
            "bg": "bg-block-content-big-story-feed-noimage-feature"
        },
        "item-content-stacked-basefeed-big-story-feed": {
            "bg": "bg-block-content-big-story-feed-stacked-basefeed",
            "h2 span": {
                "&:hover": {
                    "color": "link-hover-item-title-secondary"
                }
            }
        },
        "item-content-stacked-feature-big-story-feed": {
            "bg": "white",
            "borderBottom": "border-institute",
            "h2 span": {
                "&:hover": {
                    "color": "link-hover-item-title-secondary"
                }
            },
            "mb": "xs",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "mt": "xs",
            "p": "{s} {m}",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-content-three-column": {
            "bg": "bg-block-content-three-col"
        },
        "item-content-under-ad-big-story": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "p": {
                "<sm": "m",
                "lg": "1.875rem 4.5rem 0",
                "md": "1.5625rem {s} 0",
                "sm": "m"
            },
            "textAlign": "center",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-content-under-big-story": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "p": {
                "<sm": "m",
                "lg": "1.875rem 4.5rem 0",
                "md": "1.5625rem {s} 0",
                "sm": "m"
            },
            "textAlign": "center",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-dek-column-right-feature-ad-big-story-feed": {
            "paddingTop": {
                "_": "xxs",
                "md": "xs"
            }
        },
        "item-dek-column-right-feature-big-story-feed": {
            "paddingTop": {
                "_": "xxs",
                "md": "xs"
            }
        },
        "item-dek-noimage-ad-big-story": {
            "m": "{xs} 0",
            "pb": "0"
        },
        "item-dek-noimage-big-story": {
            "m": "{xs} 0",
            "pb": "0"
        },
        "item-dek-noimage-feature-ad-big-story-feed": {
            "paddingTop": {
                "_": "xxs",
                "md": "xs"
            }
        },
        "item-dek-noimage-feature-big-story-feed": {
            "paddingTop": {
                "_": "xxs",
                "md": "xs"
            }
        },
        "item-dek-stacked-feature-ad-big-story-feed": {
            "paddingTop": {
                "_": "xxs",
                "md": "xs"
            }
        },
        "item-dek-stacked-feature-big-story-feed": {
            "paddingTop": {
                "_": "xxs",
                "md": "xs"
            }
        },
        "item-four-across": {
            "&:nth-child(-n+2)": {
                "paddingTop": {
                    "<sm": "0"
                }
            },
            "&:nth-child(2n)": {
                "borderRight": {
                    "<sm": "border-none-transparent"
                },
                "paddingRight": {
                    "<sm": "0"
                }
            },
            "&:nth-child(n)": {
                "borderLeft": {
                    "<sm": "border-none-transparent"
                },
                "borderTop": {
                    "<sm": "border-none-transparent"
                }
            },
            "&:nth-child(odd)": {
                "paddingLeft": {
                    "<sm": "0"
                }
            },
            "border": {
                "<sm": "border-xxs-grey"
            },
            "borderBottom": {
                "md": "border-xxs-grey"
            },
            "borderRight": {
                "md": "border-xxs-grey"
            },
            "padding": "s"
        },
        "item-header-three-column": {
            "mb": "xs",
            "p": "{s} 0 0 0",
            "textAlign": "center"
        },
        "item-heading-three-column": {
            "borderBottom": "border-none-transparent",
            "fontFamily": "tertiary",
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-24",
                "md": "font-size-24",
                "sm": "font-size-24"
            },
            "letterSpacing": "letter-spacing-20",
            "lineHeight": {
                "<sm": "sm",
                "lg": "sm",
                "md": "sm",
                "sm": "sm"
            },
            "textAlign": "center"
        },
        "item-image-link-big-story": {
            "bg": "white",
            "mb": "0"
        },
        "item-image-link-big-story-feed": {
            "bg": "white",
            "margin": "0",
            "marginBottom": "0"
        },
        "item-imagelink-imageright-ad-big-story": {
            "& img": {
                "height": "100%"
            },
            "height": {
                "lg": "fit-content",
                "md": "unset"
            },
            "mb": "0",
            "width": {
                "lg": "100%",
                "md": "100vw"
            }
        },
        "item-imagelink-imageright-big-story": {
            "& img": {
                "height": "100%"
            },
            "height": {
                "lg": "fit-content",
                "md": "unset"
            },
            "mb": "0",
            "width": {
                "lg": "100%",
                "md": "100vw"
            }
        },
        "item-imageright-ad-big-story": {
            "bg": {
                "md": "brandColorTertiary"
            },
            "display": {
                "md": "flex"
            },
            "flexDirection": {
                "md": "row-reverse"
            },
            "textAlign": {
                "<sm": "center",
                "lg": "center",
                "md": "center",
                "sm": "center"
            }
        },
        "item-imageright-big-story": {
            "bg": "brandColorTertiary",
            "display": {
                "md": "flex"
            },
            "flexDirection": {
                "md": "row-reverse"
            },
            "textAlign": {
                "<sm": "center",
                "lg": "center",
                "md": "center",
                "sm": "center"
            }
        },
        "item-noimage-ad-big-story": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "mt": {
                "<sm": "-0.2rem",
                "md": "0",
                "sm": "0"
            },
            "p": "{l} {m}",
            "textAlign": "left",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-noimage-big-story": {
            "bg": "brandColorTertiary",
            "ml": {
                "<sm": "-{mobile-gutter}",
                "sm": "0"
            },
            "mt": {
                "<sm": "-0.2rem",
                "md": "0",
                "sm": "0"
            },
            "p": "{l} {m}",
            "textAlign": "left",
            "width": {
                "<sm": "100vw",
                "sm": "100%"
            }
        },
        "item-noimage-feature-big-story-feed": {
            "bg": "white",
            "p": "0 {m} {m}",
            "pb": {
                "md": "0"
            },
            "textAlign": "center"
        },
        "item-product-primary": {
            "fontFamily": "tertiary",
            "fontSize": "font-size-19",
            "lineHeight": "lineheight-sm"
        },
        "item-publish-date-four-across": {
            "textAlign": "center"
        },
        "item-publish-date-stacked-basefeed-big-story-feed": {
            "p": "0 {xs}",
            "textAlign": "center"
        },
        "item-publish-date-stacked-feature-big-story-feed": {
            "color": "black",
            "mb": "xs"
        },
        "item-stacked-feature-big-story-feed": {
            "bg": "white",
            "mb": "m",
            "textAlign": "center"
        },
        "item-three-column": {
            "p": "xs"
        },
        "item-title-ad-three-column": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-16",
                "md": "font-size-16",
                "sm": "font-size-16"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "<sm": "md",
                "lg": "md",
                "md": "md",
                "sm": "md"
            },
            "pt": "s"
        },
        "item-title-big-story-feed": {
            "p": {
                "md": "0 {xxs}"
            }
        },
        "item-title-column-right-basefeed-ad-big-story-feed": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-16",
                "md": "font-size-16",
                "sm": "font-size-16"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "<sm": "md",
                "lg": "md",
                "md": "md",
                "sm": "md"
            }
        },
        "item-title-column-right-basefeed-big-story-feed": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-16",
                "md": "font-size-16",
                "sm": "font-size-16"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "<sm": "md",
                "lg": "md",
                "md": "md",
                "sm": "md"
            }
        },
        "item-title-four-across": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-22",
                "lg": "font-size-22",
                "md": "font-size-22",
                "sm": "font-size-22"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "xs",
                "lg": "xs",
                "md": "xs",
                "sm": "xs"
            },
            "textAlign": "center"
        },
        "item-title-imageright-ad-big-story": {
            "fontSize": {
                "<sm": "font-size-30",
                "lg": "font-size-48",
                "md": "font-size-37",
                "sm": "font-size-30"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "xs",
                "lg": "xs",
                "md": "xs",
                "sm": "xs"
            },
            "mb": "xs",
            "p": {
                "md": "0 {s}"
            },
            "textAlign": "center",
            "textTransform": "capitalize"
        },
        "item-title-noimage-ad-big-story": {
            "&:after": {
                "bg": "brandColorPrimary",
                "content": "''",
                "display": "block",
                "height": "0.19rem",
                "m": "{m} 0",
                "width": {
                    "<sm": "5rem",
                    "lg": "8.5rem",
                    "md": "5rem",
                    "sm": "5rem"
                }
            },
            "fontFamily": "quaternary",
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "xs",
                "lg": "xs",
                "md": "xs",
                "sm": "xs"
            },
            "mb": "xs",
            "p": "1rem 0 0",
            "textTransform": "capitalize"
        },
        "item-title-noimage-basefeed-big-story-feed": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-20",
                "lg": "font-size-20",
                "md": "font-size-20",
                "sm": "font-size-20"
            },
            "lineHeight": {
                "<sm": "xs",
                "lg": "xs",
                "md": "xs",
                "sm": "xs"
            },
            "p": "{m} 0 0"
        },
        "item-title-noimage-big-story": {
            "&:after": {
                "bg": "brandColorPrimary",
                "content": "''",
                "display": "block",
                "height": "0.19rem",
                "m": "{m} 0",
                "width": {
                    "<sm": "5rem",
                    "lg": "8.5rem",
                    "md": "5rem",
                    "sm": "5rem"
                }
            },
            "fontFamily": "quaternary",
            "fontSize": {
                "<sm": "font-size-30",
                "lg": "font-size-52",
                "md": "font-size-42",
                "sm": "font-size-30"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "xs",
                "lg": "xs",
                "md": "xs",
                "sm": "xs"
            },
            "mb": "0",
            "p": "1rem 0 0",
            "textTransform": "capitalize"
        },
        "item-title-noimage-feature-big-story-feed": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-20",
                "lg": "font-size-20",
                "md": "font-size-20",
                "sm": "font-size-20"
            },
            "lineHeight": {
                "<sm": "xs",
                "lg": "xs",
                "md": "xs",
                "sm": "xs"
            },
            "p": "0"
        },
        "item-title-stacked-basefeed-big-story-feed": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-18",
                "lg": "font-size-24",
                "md": "font-size-18",
                "sm": "font-size-18"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "sm",
                "lg": "sm",
                "md": "sm",
                "sm": "sm"
            },
            "p": "0 {xs}",
            "textAlign": "center"
        },
        "item-title-stacked-feature-big-story-feed": {
            "color": "black",
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-30",
                "lg": "font-size-35",
                "md": "font-size-28",
                "sm": "font-size-30"
            },
            "h2 span": {
                "&:hover": {
                    "color": "link-hover-item-title-secondary"
                }
            },
            "lineHeight": {
                "<sm": "sm",
                "lg": "sm",
                "md": "sm",
                "sm": "sm"
            }
        },
        "item-title-three-column": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-16",
                "lg": "font-size-16",
                "md": "font-size-16",
                "sm": "font-size-16"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "<sm": "md",
                "lg": "md",
                "md": "md",
                "sm": "md"
            },
            "pt": "s"
        },
        "label-2xs": {
            "fontSize": "font-size-13",
            "lineHeight": "lineheight-sm"
        },
        "label-3xs": {
            "fontSize": "font-size-12",
            "lineHeight": "lineheight-sm"
        },
        "label-4xs": {
            "fontSize": "font-size-11",
            "lineHeight": "lineheight-sm"
        },
        "label-header-primary": {
            "fontFamily": "secondary",
            "fontSize": "font-size-18",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-md"
        },
        "label-primary": {
            "bg": "transparent",
            "borderRadius": "0.125rem",
            "color": "black",
            "display": "inline-block",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-15",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "xxs",
            "mb": "s",
            "p": "xs",
            "textTransform": "uppercase"
        },
        "label-quaternary": {
            "color": "brandColorQuinary",
            "fontFamily": "secondary",
            "fontSize": "font-size-12",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-10",
            "lineHeight": "xs",
            "mb": "xs",
            "textTransform": "uppercase"
        },
        "label-quinary": {
            "fontFamily": "primary",
            "fontSize": "font-size-18",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "md",
            "textTransform": "uppercase"
        },
        "label-secondary": {
            "bg": "transparent",
            "borderRadius": "0.125rem",
            "color": "black",
            "display": "inline-block",
            "fontFamily": "tertiary",
            "fontSize": "font-size-12",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "xxs",
            "paddingRight": "xs",
            "textTransform": "uppercase"
        },
        "label-senary": {
            "fontFamily": "secondary",
            "fontSize": "font-size-12",
            "letterSpacing": "letter-spacing-20",
            "lineHeight": "lineheight-base",
            "textTransform": "uppercase"
        },
        "label-tag-primary": {
            "bg": "none",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-15",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-base",
            "padding": "0",
            "textTransform": "uppercase",
            "width": "fit-content"
        },
        "label-tag-primary-darkbg": {
            "bg": "greyXXXdark",
            "color": "white",
            "fontFamily": "LabelPrimary",
            "fontSize": "font-size-13",
            "fontWeight": "bold",
            "lineHeight": "lineheight-max",
            "padding": "{xxxs} {xs}",
            "textAlign": "center",
            "textTransform": "uppercase",
            "width": "fit-content"
        },
        "label-tertiary": {
            "fontFamily": "tertiary",
            "fontSize": "font-size-16",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "md",
            "mb": "0",
            "textTransform": "uppercase"
        },
        "label-xs": {
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-sm"
        },
        "left-align-action-block": {
            "alignItems": "baseline",
            "display": "flex",
            "justifyContent": "start"
        },
        "left-align-action-buttons-wrapper": {
            "textAlign": "center"
        },
        "left-align-breadcrumb": {
            "m": {
                "xxs:xxxlg": "6px 0 0 0"
            },
            "p": {
                "sm": "{m} 0 0 0",
                "smd>": "{m} 0 0"
            },
            "padding": {
                "xxs:xxxlg": "6px 0 0 0",
                "xxxlg": "{s} {xs} {xs} 0"
            },
            "pl": {
                "<sm": "0",
                "sm": "0",
                "xxs:xxxlg": "6px 0 0 0",
                "xxxlg": "0",
                "xxxxlg": "0"
            }
        },
        "left-align-byline": {
            "marginRight": "0.625rem",
            "mr": "xs",
            "paddingRight": "0.3125rem"
        },
        "left-align-byline-container-text-only": {
            "alignItems": "baseline",
            "display": "block",
            "flexDirection": {
                "sm": "row",
                "xxs": "column"
            },
            "flexWrap": {
                "sm": "wrap",
                "xxs": "wrap"
            },
            "justifyContent": "start"
        },
        "left-align-content-container": {
            "m": {
                "xxxxlg": "center"
            },
            "maxWidth": {
                "md": "calc(100vw - (1rem * 2))",
                "smd:xxxlg": "calc(20.625rem * 2 - 1rem)",
                "xxxxlg": "calc(20.625rem * 2 - 1rem)"
            },
            "ml": {
                "lg:xxlg": "calc((100vw - calc(20.625rem * 2 - 1rem) - 1rem - 20.625rem) / 2)",
                "xxxlg": "calc((100vw - calc(20.625rem * 2 - 1rem)) / 2)"
            },
            "width": {
                "md": "calc(100vw - (1rem * 2))",
                "smd:xxxlg": "calc(20.625rem * 2 - 1rem)",
                "xxxlg": "calc(20.625rem * 2 - 2rem)"
            }
        },
        "left-align-content-dek": {
            "textAlign": "left"
        },
        "left-align-enhanced-byline-container": {
            "justifyContent": "flex-start",
            "m": "0",
            "margin": "0"
        },
        "left-align-enhanced-byline-label": {
            "display": {
                "<sm": "block"
            }
        },
        "left-align-enhanced-byline-wrapper": {
            "display": "inline-block",
            "justifyContent": "start",
            "m": {
                "xxs:xxxlg": "auto"
            },
            "margin": {
                "xxs:xxxlg": "auto"
            }
        },
        "left-align-publish-date": {
            "marginLeft": "0",
            "ml": "0"
        },
        "left-align-verifier-job-title": {
            "marginLeft": {
                "<sm": "0",
                "sm": "0.625rem"
            },
            "ml": {
                "<sm": "0",
                "sm": "xs"
            },
            "paddingLeft": {
                "<sm": "0",
                "sm": "0.3125rem"
            },
            "pl": {
                "<sm": "0",
                "sm": "xxs"
            }
        },
        "menu-primary": {
            "color": "black",
            "fontFamily": "secondary",
            "fontSize": "font-size-16",
            "fontWeight": "bold"
        },
        "menu-secondary": {
            "fontFamily": "tertiary",
            "fontSize": "font-size-12",
            "fontWeight": "bold",
            "p": "s",
            "textTransform": "capitalize"
        },
        "menu-tertiary": {
            "&:hover": {
                "color": "black"
            },
            "color": "black",
            "fontFamily": "secondary",
            "fontSize": "font-size-12",
            "fontWeight": "700",
            "p": "s",
            "textTransform": "none"
        },
        "nav-with-sponsor": {
            "bg": "white",
            "borderBottom": "border-thin-grey"
        },
        "number-primary": {
            "fontFamily": "quaternary",
            "fontSize": {
                "_": "4.72252",
                "lg": "4.72252"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "_": "lineheight-base",
                "lg": "lineheight-base"
            }
        },
        "overlay-item-slide-number-landscape": {
            "fontFamily": "primary",
            "fontSize": "font-size-14",
            "fontWeight": "bold",
            "lineHeight": "lineheight-base"
        },
        "overlay-item-slide-number-portrait": {
            "fontFamily": "primary",
            "fontSize": "font-size-14",
            "fontWeight": "bold",
            "lineHeight": "lineheight-base"
        },
        "overlay-item-text": {
            "fontFamily": "secondary",
            "fontSize": "font-size-14",
            "lineHeight": "lineheight-md"
        },
        "repositioned-disclaimer": {
            "& p": {
                "padding": "0",
                "padding:": "0",
                "pl": {
                    "_": "1.875rem",
                    "lg": "2.5rem",
                    "smd:lg": "1.5rem"
                },
                "pr": {
                    "_": "1.875rem",
                    "lg": "2.5rem"
                },
                "textAlign": "center"
            },
            "maxWidth": {
                "md:smd": "45.25rem"
            },
            "mb": {
                "smd:lg": "0.9375rem"
            },
            "mt": {
                "_": "0.9375rem"
            },
            "pl": {
                "md:smd": "3.5rem"
            },
            "pr": {
                "md:smd": "3.5rem"
            },
            "width": "auto"
        },
        "saved-headline-dek": {
            "fontFamily": "DekPrimary",
            "fontSize": "font-size-18",
            "lineHeight": "lineheight-sm"
        },
        "saved-headline-primary": {
            "fontFamily": "DekPrimary",
            "fontSize": {
                "<lg": "font-size-17",
                "<sm": "font-size-24",
                "lg": "font-size-24"
            },
            "fontWeight": "normal",
            "lineHeight": {
                "<lg": "lineheight-sm",
                "<sm": "lineheight-sm",
                "lg": "lineheight-sm",
                "md": "lineheight-sm"
            }
        },
        "saved-headline-title": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-28"
            },
            "lineHeight": {
                "<sm": "lineheight-sm",
                "lg": "lineheight-sm",
                "md": "lineheight-sm"
            }
        },
        "slide-title-primary": {
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-31",
                "md": "font-size-30"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "lineheight-xs",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "small-specs-error-text-primary": {
            "color": "globalColorError",
            "fontFamily": "Inter, Helvetica, Arial, Sans-serif",
            "fontSize": "font-size-11",
            "fontWeight": "normal",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-xs"
        },
        "small-specs-label-text-primary": {
            "color": "greyXXdark",
            "fontFamily": "primary",
            "fontSize": "font-size-11",
            "fontWeight": "normal",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-xs",
            "textTransform": "none"
        },
        "small-specs-label-text-secondary": {
            "color": "greyXXdark",
            "fontFamily": "Inter, Helvetica, Arial, Sans-serif",
            "fontSize": "font-size-11",
            "fontWeight": "normal",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "lineheight-xs",
            "textTransform": "none"
        },
        "specs-item-primary": {
            "fontFamily": "primary",
            "fontSize": {
                "<sm": "font-size-14",
                "lg": "font-size-14",
                "md": "font-size-16"
            },
            "lineHeight": {
                "<sm": "lineheight-lg",
                "lg": "lineheight-lg",
                "md": "lineheight-lg"
            }
        },
        "spotlight-details-dark": {
            "bg": "brandColorPrimary",
            "m": {
                "<sm": "0 {s} {s}",
                "lg": "0 23rem {s}",
                "md": "0 6.25rem {s}",
                "sm": "0 {s} {s}"
            },
            "pb": "xxs",
            "pl": {
                "<sm": "0",
                "lg": "0",
                "md": "0",
                "sm": "0"
            },
            "pr": {
                "<sm": "0",
                "lg": "0",
                "md": "0",
                "sm": "0"
            },
            "pt": "s"
        },
        "spotlight-details-light": {
            "bg": "white",
            "m": {
                "<sm": "0 {s} {s}",
                "lg": "0 23rem {s}",
                "md": "0 6.25rem {s}",
                "sm": "0 {s} {s}"
            },
            "pb": "xxs",
            "pl": {
                "<sm": "0",
                "lg": "0",
                "md": "0",
                "sm": "0"
            },
            "pr": {
                "<sm": "0",
                "lg": "0",
                "md": "0",
                "sm": "0"
            },
            "pt": "s"
        },
        "spotlight-hed-dark": {
            "&:hover": {
                "color": "white"
            },
            "bg": "brandColorPrimary",
            "color": "white",
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-35",
                "md": "font-size-30",
                "sm": "font-size-24"
            },
            "lineHeight": {
                "<sm": "lineheight-xsmall",
                "lg": "lineheight-xsmall",
                "md": "lineheight-xsmall",
                "sm": "lineheight-xsmall"
            },
            "p": "{m} {xs}"
        },
        "spotlight-hed-light": {
            "&:hover": {
                "color": "brandColorPrimary"
            },
            "bg": "white",
            "color": "black",
            "fontFamily": "secondary",
            "fontSize": {
                "<sm": "font-size-24",
                "lg": "font-size-35",
                "md": "font-size-30",
                "sm": "font-size-24"
            },
            "lineHeight": {
                "<sm": "lineheight-xsmall",
                "lg": "lineheight-xsmall",
                "md": "lineheight-xsmall",
                "sm": "lineheight-xsmall"
            },
            "p": "{m} {xs}"
        },
        "spotlight-label-dark": {
            "bg": "brandColorPrimary",
            "border": "border-xxs-white",
            "borderRadius": "0",
            "color": "white",
            "fontSize": {
                "<sm": "font-size-12",
                "lg": "font-size-12",
                "md": "font-size-12",
                "sm": "font-size-12"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "lineheight-base",
                "lg": "lineheight-base",
                "md": "lineheight-base",
                "sm": "lineheight-base"
            },
            "mb": "xs",
            "p": "0.40625rem"
        },
        "spotlight-label-light": {
            "bg": "white",
            "border": "border-xxs-black",
            "borderRadius": "0",
            "color": "black",
            "fontSize": {
                "<sm": "font-size-12",
                "lg": "font-size-12",
                "md": "font-size-12",
                "sm": "font-size-12"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<sm": "lineheight-base",
                "lg": "lineheight-base",
                "md": "lineheight-base",
                "sm": "lineheight-base"
            },
            "mb": "xs",
            "p": "0.40625rem"
        },
        "subheadline-primary": {
            "color": "black",
            "fontFamily": "primary",
            "fontSize": {
                "<lg": "font-size-16",
                "lg": "font-size-17"
            },
            "fontWeight": "normal",
            "letterSpacing": "0",
            "lineHeight": {
                "<lg": "md",
                "lg": "md"
            },
            "mt": "s"
        },
        "subheadline-secondary": {
            "color": "black",
            "fontSize": "font-size-12",
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-6",
            "lineHeight": "md"
        },
        "three-column-block-column": {
            "border": "border-xxs-black",
            "mb": "m",
            "p": {
                "<sm": "0 {m} {m}",
                "lg": "xs",
                "md": "xs",
                "sm": "0 {m} {m}"
            }
        },
        "title-primary": {
            "fontFamily": "TitlePrimary",
            "fontSize": {
                "<sm": "font-size-30",
                "lg": "font-size-52",
                "md": "font-size-42",
                "sm": "font-size-30"
            },
            "fontWeight": "bold",
            "letterSpacing": "letter-spacing-n1",
            "lineHeight": {
                "<sm": "xs",
                "lg": "xxs",
                "md": "xxs",
                "sm": "xs"
            }
        },
        "title-quaternary": {
            "fontFamily": "secondary",
            "fontSize": "font-size-20",
            "fontWeight": "bold",
            "lineHeight": "lineheight-xs"
        },
        "title-quinary": {
            "&:hover": {
                "color": "link-hover-item-title-primary",
                "transition": "color 0.3s ease-in-out"
            },
            "fontFamily": "secondary",
            "fontSize": "font-size-20",
            "fontWeight": "bold",
            "lineHeight": "lineheight-sm",
            "m": "{s} 0 {xxs}"
        },
        "title-secondary": {
            "fontFamily": "TitlePrimary"
        },
        "title-senary": {
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-30",
                "lg": "font-size-40",
                "md": "font-size-35"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-md",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "title-tertiary": {
            "fontFamily": "secondary",
            "fontSize": {
                "<md": "font-size-24",
                "<sm": "font-size-26",
                "lg": "font-size-30",
                "md": "font-size-26"
            },
            "fontWeight": "bold",
            "lineHeight": {
                "<md": "lineheight-sm",
                "<sm": "lineheight-md",
                "lg": "lineheight-xs",
                "md": "lineheight-xs"
            }
        },
        "underline-link": {
            "p": "0"
        }
    }
};

export default theme;
