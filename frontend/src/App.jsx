/**
 * Enhanced Compass Component
 * - Polished dial with tick marks and subtle glass effect
 * - Dual-needle with smooth spring-like easing
 * - Bearing ring rotates while cardinal letters stay upright
 */
const Compass = ({ bearing = 0 }) => {
  const majorTicks = Array.from({ length: 12 }).map((_, i) => i * 30); // every 30°
  const minorTicks = Array.from({ length: 60 }).map((_, i) => i * 6);  // every 6°

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80">
      {/* Outer bezel with soft glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-2xl" />
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-200 to-slate-50 shadow-inner" />

      {/* Dial background */}
      <div className="absolute inset-3 rounded-full bg-gradient-to-b from-white to-slate-100 border border-slate-200" />

      {/* Accent luminous ring */}
      <div className="absolute inset-6 rounded-full border border-blue-200/70 shadow-[0_0_30px_6px_rgba(59,130,246,0.15)]" />

      {/* Tick marks ring - rotates with bearing */}
      <div
        className="absolute inset-6 rounded-full"
        style={{
          transform: `rotate(${bearing}deg)`,
          transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Minor ticks */}
        {minorTicks.map((deg) => (
          <div
            key={`m-${deg}`}
            className="absolute left-1/2 top-0 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
          >
            <div className="w-[2px] h-3 bg-slate-300/90" />
          </div>
        ))}

        {/* Major ticks */}
        {majorTicks.map((deg) => (
          <div
            key={`M-${deg}`}
            className="absolute left-1/2 top-0 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
          >
            <div className="w-[3px] h-5 bg-slate-500 rounded-sm" />
          </div>
        ))}
      </div>

      {/* Cardinal and intercardinal labels (stay upright) */}
      {[
        { label: 'N', deg: 0 },
        { label: 'NE', deg: 45 },
        { label: 'E', deg: 90 },
        { label: 'SE', deg: 135 },
        { label: 'S', deg: 180 },
        { label: 'SW', deg: 225 },
        { label: 'W', deg: 270 },
        { label: 'NW', deg: 315 },
      ].map(({ label, deg }) => (
        <div
          key={label}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-37%)`,
          }}
        >
          <div
            className={`text-sm sm:text-base font-black tracking-wide ${
              label.length === 1 ? 'text-gray-700' : 'text-gray-500'
            }`}
            style={{
              transform: `rotate(${-deg}deg)`,
              textShadow: '0 1px 1px rgba(0,0,0,0.08)',
            }}
          >
            {label}
          </div>
        </div>
      ))}

      {/* Bearing readout badge */}
      <div className="absolute left-1/2 -top-3 -translate-x-1/2">
        <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow">
          <span className="text-xs font-semibold text-slate-600">
            Bearing
          </span>
          <span className="mx-2 text-xs text-slate-300">•</span>
          <span className="text-sm font-bold tabular-nums text-slate-800">
            {Math.round(((bearing % 360) + 360) % 360)}°
          </span>
        </div>
      </div>

      {/* Needle stack */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Needle shadow */}
        <div
          className="absolute w-1 h-24 rounded-full bg-black/5 blur-sm"
          style={{
            transformOrigin: 'bottom center',
            transform: `translateY(-8px) rotate(${bearing}deg)`,
            transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {/* Tail (white) */}
        <div
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '48px solid rgba(255,255,255,0.95)',
            transformOrigin: 'bottom center',
            transform: `translateY(10px) rotate(${bearing + 180}deg)`,
            transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
            filter: 'drop-shadow(0 3px 2px rgba(0,0,0,0.15))',
          }}
        />

        {/* Main needle (red) */}
        <div
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '64px solid #ef4444',
            transformOrigin: 'bottom center',
            transform: `translateY(-6px) rotate(${bearing}deg)`,
            transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
            filter: 'drop-shadow(0 6px 4px rgba(0,0,0,0.25))',
          }}
        />

        {/* Center cap */}
        <div className="w-5 h-5 rounded-full bg-slate-800 shadow-inner border-2 border-white relative">
          <div className="absolute inset-0 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Subtle glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute -top-8 left-6 right-6 h-20 bg-white/35 blur-xl rounded-full" />
        <div className="absolute bottom-2 left-10 right-10 h-8 bg-white/10 blur-lg rounded-full" />
      </div>
    </div>
  );
};


