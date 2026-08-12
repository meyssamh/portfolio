export default function OgImage({ title, subtitle, lng }) {
  const isRTL = lng === 'fa';
  const fontFamily = isRTL ? 'Vazirmatn' : 'Inter';

  return (
    <div
      style={{
        background: '#09090b',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: isRTL ? 'flex-end' : 'flex-start',
        padding: '80px',
        fontFamily: fontFamily,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Bronze Radial Glow in the background */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background:
            'radial-gradient(circle, rgba(197, 164, 126, 0.15) 0%, rgba(9, 9, 11, 0) 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Top Bronze Accent Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #C5A47E, #E5C595, #C5A47E)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '85%',
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: 1.1,
            color: '#ffffff',
            letterSpacing: '-2px',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              fontSize: '36px',
              color: '#C5A47E',
              margin: 0,
              fontWeight: 500,
            }}
          >
            {subtitle}
          </p>
        )}

        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '4px', background: '#C5A47E' }} />
          <p style={{ fontSize: '28px', color: '#a1a1aa', margin: 0 }}>Meyssam Hosseinifard</p>
        </div>
      </div>
    </div>
  );
}
