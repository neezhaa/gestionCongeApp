import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { ChevronsUpDown, Check } from "lucide-react";

function AppearanceSettings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [font, setFont] = useState("inter");
  const [showLangOptions, setShowLangOptions] = useState(false);
  const [showFontOptions, setShowFontOptions] = useState(false);
  const languageRef = useRef(null);
  const fontRef = useRef(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const fonts = [
    { value: "inter", name: "Inter" },
    { value: "manrope", name: "Manrope" },
    { value: "system", name: "System" },
  ];

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Handle clicks outside dropdowns
  const handleClickOutside = (event) => {
    if (languageRef.current && !languageRef.current.contains(event.target)) {
      setShowLangOptions(false);
    }
    if (fontRef.current && !fontRef.current.contains(event.target)) {
      setShowFontOptions(false);
    }
  };

  // Attach click-outside listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle language selection
  const handleLanguageSelect = (code) => {
    setLanguage(code);
    setShowLangOptions(false);
  };

  // Handle font selection
  const handleFontSelect = (value) => {
    setFont(value);
    setShowFontOptions(false);
  };

  return (
    <div className="flex-1 pl-6">
      <div>
        <h2 className="text-lg font-medium">Apparence</h2>
        <p className="text-sm text-muted-foreground">
          Personnalisez l'apparence de l'application. Basculez automatiquement entre les thèmes.
        </p>
      </div>
      <div className="bg-border h-[1px] w-full shrink-0 my-6" />

      <form className="space-y-8">
        {/* Font and Language Selection (Side by Side) */}
        <div className="flex flex-col gap-4">
          {/* Font Selector */}
          <div className="space-y-2 flex-1" ref={fontRef}>
            <label className="text-base font-medium">Police</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowFontOptions(!showFontOptions)}
                className="inline-flex items-center justify-between w-full px-4 py-2 text-sm border rounded-md bg-background hover:bg-accent hover:text-accent-foreground"
              >
                {fonts.find((f) => f.value === font)?.name}
                <ChevronsUpDown className="h-4 w-4 opacity-50" />
              </button>

              {/* Font Dropdown */}
              {showFontOptions && (
                <div className="absolute w-full mt-1 bg-popover border rounded-md shadow-lg z-10">
                  {fonts.map((f) => (
                    <div
                      key={f.value}
                      onClick={() => handleFontSelect(f.value)}
                      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-accent"
                    >
                      {f.name}
                      {font === f.value && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="text-[0.8rem] text-muted-foreground">
              Définissez la police pour le tableau de bord.
            </p>
          </div>

          {/* Language Selector */}
          <div className="space-y-2 flex-1" ref={languageRef}>
            <label className="text-base font-medium">Langue</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLangOptions(!showLangOptions)}
                className="inline-flex items-center justify-between w-full px-4 py-2 text-sm border rounded-md bg-background hover:bg-accent hover:text-accent-foreground"
              >
                {languages.find((l) => l.code === language)?.name}
                <ChevronsUpDown className="h-4 w-4 opacity-50" />
              </button>

              {/* Language Dropdown */}
              {showLangOptions && (
                <div className="absolute w-full mt-1 bg-popover border rounded-md shadow-lg z-10">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-accent"
                    >
                      {lang.name}
                      {language === lang.code && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="text-[0.8rem] text-muted-foreground">
              Définissez la langue pour le tableau de bord.
            </p>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="space-y-2">
          <label className="text-base font-medium">Thème</label>
          <p className="text-[0.8rem] text-muted-foreground">
            Selectionnez le thème pour le tableau de bord.
          </p>
          <div className="grid max-w-md grid-cols-2 gap-8 pt-2 outline-none">
            {/* Light Option */}
            <div className="space-y-2" onClick={toggleTheme}>
              <div
                className={`items-center rounded-md border-2 p-1 ${
                  !isDarkMode ? "border-black" : ""
                }`}
              >
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                Light
              </span>
            </div>

            {/* Dark Option */}
            <div className="space-y-2" onClick={toggleTheme}>
              <div
                className={`items-center rounded-md border-2 p-1 ${
                  isDarkMode ? "border-black" : ""
                }`}
              >
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                Dark
              </span>
            </div>
          </div>
        </div>

        <Button>Mettre à jour les préférences</Button>
      </form>
    </div>
  );
}

export default AppearanceSettings;