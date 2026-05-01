import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig, spring, Audio, staticFile } from 'remotion';

export const Main = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bg = '#050505';
  const accent = '#D4AF37';

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily: 'sans-serif', overflow: 'hidden' }}>

      {/* SCENE 1: THE HOOK & MAIN REVEAL (0 - 145) */}
      <Sequence from={0} durationInFrames={145}>
        <Audio src={staticFile('audio/audio_1.m4a')} />
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
             position: 'absolute',
             width: '100%',
             height: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
             transform: `scale(${interpolate(frame, [0, 145], [1, 1.1], { extrapolateRight: 'clamp' })})`
          }}>
            <img src={staticFile('images/1.jpg')} style={{ height: '90%', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>

          {/* Intro Text */}
          <AbsoluteFill style={{ 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: `rgba(5, 5, 5, ${interpolate(frame, [70, 145], [0.8, 0], { extrapolateRight: 'clamp' })})`,
            opacity: interpolate(frame, [100, 145], [1, 0], { extrapolateRight: 'clamp' })
          }}>
            <h1 style={{
              color: 'white',
              fontSize: '80px',
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '5px',
              opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
              transform: `translateY(${interpolate(frame, [0, 15], [50, 0], { extrapolateRight: 'clamp' })}px)`
            }}>
              The Ultimate
            </h1>
            <h2 style={{
              color: accent,
              fontSize: '110px',
              fontWeight: '900',
              textAlign: 'center',
              margin: '0',
              textTransform: 'uppercase',
              textShadow: `0 0 20px rgba(212, 175, 55, 0.4)`,
              transform: `scale(${spring({ frame: frame - 15, fps, config: { damping: 12 } })})`
            }}>
              Travel Companion
            </h2>
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2: EXTERIOR FINISH / HANDLE (145 - 335) */}
      <Sequence from={145} durationInFrames={190}>
        <Audio src={staticFile('audio/audio_2.m4a')} />
        <AbsoluteFill style={{ 
          backgroundColor: bg,
          transform: `translateX(${interpolate(frame - 145, [0, 20], [1080, 0], { extrapolateRight: 'clamp' })}px)`
        }}>
          <img src={staticFile('images/features/handle_exact.jpg')} style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: `scale(${interpolate(frame - 145, [0, 190], [1.2, 1], { extrapolateRight: 'clamp' })})`
          }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          
          <div style={{
            position: 'absolute',
            bottom: '150px',
            left: '100px',
            backgroundColor: 'rgba(5,5,5,0.85)',
            padding: '30px 50px',
            borderLeft: `8px solid ${accent}`,
            opacity: interpolate(frame - 165, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
          }}>
             <h2 style={{ color: 'white', fontSize: '60px', margin: 0, textTransform: 'uppercase' }}>Ultra-Durable</h2>
             <h3 style={{ color: accent, fontSize: '40px', margin: 0, marginTop: '10px' }}>Carbon-Fibre Shell</h3>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: 360 WHEELS (335 - 555) */}
      <Sequence from={335} durationInFrames={220}>
        <Audio src={staticFile('audio/audio_3.m4a')} />
        <AbsoluteFill style={{ 
          backgroundColor: bg,
          transform: `translateY(${interpolate(frame - 335, [0, 20], [1920, 0], { extrapolateRight: 'clamp' })}px)`
        }}>
          <img src={staticFile('images/features/wheels_exact.jpg')} style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: `scale(${interpolate(frame - 335, [0, 220], [1, 1.2], { extrapolateRight: 'clamp' })})`
          }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          
          <div style={{
            position: 'absolute',
            top: '200px',
            right: '100px',
            backgroundColor: 'rgba(5,5,5,0.85)',
            padding: '30px 50px',
            borderRight: `8px solid ${accent}`,
            textAlign: 'right',
            opacity: interpolate(frame - 355, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
          }}>
             <h2 style={{ color: 'white', fontSize: '60px', margin: 0, textTransform: 'uppercase' }}>Smooth Glide</h2>
             <h3 style={{ color: accent, fontSize: '40px', margin: 0, marginTop: '10px' }}>360° Precision Wheels</h3>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: TSA LOCK (555 - 785) */}
      <Sequence from={555} durationInFrames={230}>
        <Audio src={staticFile('audio/audio_4.m4a')} />
        <AbsoluteFill style={{ 
          backgroundColor: bg,
          opacity: interpolate(frame - 555, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
        }}>
          <img src={staticFile('images/features/locks_exact.jpg')} style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: `scale(${interpolate(frame - 555, [0, 230], [1.3, 1], { extrapolateRight: 'clamp' })})`
          }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          
          <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              backgroundColor: 'rgba(5,5,5,0.9)',
              padding: '40px 80px',
              border: `2px solid ${accent}`,
              borderRadius: '20px',
              opacity: interpolate(frame - 575, [0, 20], [0, 1], { extrapolateRight: 'clamp' }),
              transform: `scale(${spring({ frame: frame - 575, fps })})`
            }}>
               <h2 style={{ color: accent, fontSize: '70px', margin: 0, textAlign: 'center', textTransform: 'uppercase' }}>Total Peace of Mind</h2>
               <h3 style={{ color: 'white', fontSize: '40px', margin: 0, marginTop: '20px', textAlign: 'center', letterSpacing: '2px' }}>T.S.A. APPROVED LOCKS</h3>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 5: INTERIOR (785 - 1015) */}
      <Sequence from={785} durationInFrames={230}>
        <Audio src={staticFile('audio/audio_5.m4a')} />
        <AbsoluteFill style={{ 
          backgroundColor: bg,
          clipPath: `circle(${interpolate(frame - 785, [0, 30], [0, 150], { extrapolateRight: 'clamp' })}% at 50% 50%)`
        }}>
          <img src={staticFile('images/features/interior_exact.jpg')} style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: `scale(${interpolate(frame - 785, [0, 230], [1.1, 1], { extrapolateRight: 'clamp' })})`
          }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          
          <div style={{
            position: 'absolute',
            bottom: '200px',
            width: '100%',
            textAlign: 'center',
            opacity: interpolate(frame - 805, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
          }}>
             <h2 style={{ 
               color: 'white', 
               fontSize: '70px', 
               margin: 0, 
               textTransform: 'uppercase',
               textShadow: '0 5px 20px rgba(0,0,0,0.8)'
             }}>
               Pure Luxury Inside
             </h2>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 6: VARIATIONS & OUTRO (1015 - 1195) */}
      <Sequence from={1015} durationInFrames={180}>
        <Audio src={staticFile('audio/audio_6.m4a')} />
        <AbsoluteFill style={{ backgroundColor: bg }}>
           <AbsoluteFill style={{ 
             flexDirection: 'row',
             opacity: interpolate(frame - 1015, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
           }}>
              {/* Midnight Black Left Side */}
              <div style={{ flex: 1, backgroundColor: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
                 <img src={staticFile('images/1.jpg')} style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'cover',
                   opacity: 0.6,
                   transform: `scale(${interpolate(frame - 1015, [0, 180], [1, 1.1])})`
                 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              {/* Deep Sapphire Right Side */}
              <div style={{ flex: 1, backgroundColor: '#001a33', position: 'relative', overflow: 'hidden' }}>
                 <img src={staticFile('images/2.jpg')} style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'cover',
                   opacity: 0.6,
                   transform: `scale(${interpolate(frame - 1015, [0, 180], [1, 1.1])})`
                 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
           </AbsoluteFill>

           <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
             <h1 style={{ 
               color: 'white', 
               fontSize: '80px',
               textTransform: 'uppercase',
               letterSpacing: '4px',
               opacity: interpolate(frame - 1045, [0, 20], [0, 1], { extrapolateRight: 'clamp' }),
               transform: `translateY(${interpolate(frame - 1045, [0, 20], [50, 0])}px)`
             }}>
               Midnight Black & Deep Sapphire
             </h1>
             
             <h2 style={{
               color: accent,
               fontSize: '120px',
               margin: '40px 0',
               fontWeight: '900',
               textTransform: 'uppercase',
               textShadow: `0 0 40px rgba(212, 175, 55, 0.4)`,
               opacity: interpolate(frame - 1075, [0, 30], [0, 1], { extrapolateRight: 'clamp' }),
               transform: `scale(${spring({ frame: frame - 1075, fps })})`
             }}>
               UPGRADE TODAY
             </h2>

             <div style={{
               opacity: interpolate(frame - 1105, [0, 30], [0, 1], { extrapolateRight: 'clamp' })
             }}>
               <p style={{ color: 'white', fontSize: '50px', letterSpacing: '5px', fontWeight: 'bold' }}>rare-luggage.com</p>
             </div>
           </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
