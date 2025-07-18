// Configuration for Clontarf Rugby Team Management
const CONFIG = {
    // ✅ KEEP YOUR EXISTING SETTINGS
    COACH_PASSWORD: 'clontarf2025',
    WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbzsXHlxDIxjVOBzEnC-KkjqGc98FyeD1GKyXivho3eQhLqvyyQN_igho_31Zmq2cnsF/exec',
    CLUB_NAME: 'Clontarf Rugby',
    SQUADS: ['4ths', '5ths'],
    POSITIONS: {
        '1': 'Loosehead Prop',
        '2': 'Hooker', 
        '3': 'Tighthead Prop',
        '4': 'Lock',
        '5': 'Lock',
        '6': 'Blindside Flanker',
        '7': 'Openside Flanker',
        '8': 'Number 8',
        '9': 'Scrum-half',
        '10': 'Fly-half',
        '11': 'Left Wing',
        '12': 'Inside Centre',
        '13': 'Outside Centre',
        '14': 'Right Wing',
        '15': 'Fullback'
    },
    
    // ✅ ADD THESE NEW SETTINGS
    
    // Default Coach Information
    DEFAULT_COACH: {
        name: 'Luke Teeling',
        email: 'luketeeling@gmail.com'
    },
    
    // App Settings
    APP_VERSION: '2.0',
    DEBUG_MODE: true, // Set to false in production
    
    // Feature Flags
    FEATURES: {
        whatsappIntegration: true,
        autoRefresh: true,
        notesSystem: true,
        activityLog: true
    },
    
    // API Timeouts (in milliseconds)
    TIMEOUTS: {
        default: 30000,  // 30 seconds
        longRunning: 60000  // 60 seconds for complex operations
    }
};

// ✅ ADD THIS EXPORT FUNCTIONALITY
// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG; // Node.js
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG; // Browser
}

// ✅ ADD THIS DEBUG LOGGING
// Debug logging
if (CONFIG.DEBUG_MODE && typeof console !== 'undefined') {
    console.log('🏉 Clontarf Rugby Config Loaded:', CONFIG.WEB_APP_URL);
    console.log('📊 Debug mode enabled - check console for API logs');
}
