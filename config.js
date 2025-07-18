// Configuration for Clontarf Rugby Team Management
const CONFIG = {
    // ✅ YOUR EXISTING SETTINGS (UNCHANGED)
    COACH_PASSWORD: 'clontarf2025',
    WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbxOZgq_vx3U9oyDPhSwyaIWkjxMHFouUW87hqQEu07E2RMNzUSGgSMqHmuGmWDFxiE9/exec',
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

// ✅ EXPORT FOR DIFFERENT ENVIRONMENTS (Keep your existing export - UNCHANGED)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG; // Node.js
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG; // Browser - your existing pages use this
}

// ✅ DEBUG LOGGING (Keep your existing logging - UNCHANGED)
if (CONFIG.DEBUG_MODE && typeof console !== 'undefined') {
    console.log('🏉 Clontarf Rugby Config Loaded:', CONFIG.WEB_APP_URL);
    console.log('📊 Debug mode enabled - check console for API logs');
}

// ✅ ADDITIONAL COMPATIBILITY FOR NEW PAGES ONLY
// Wait for DOM to load before setting up compatibility
document.addEventListener('DOMContentLoaded', function() {
    // Only add compatibility layer if not already exists
    if (typeof window.RUGBY_CONFIG === 'undefined') {
        window.RUGBY_CONFIG = {
            GOOGLE_APPS_SCRIPT_URL: CONFIG.WEB_APP_URL,
            SHEET_ID: CONFIG.SHEET_ID || '',
            CLUB_NAME: CONFIG.CLUB_NAME,
            DEFAULT_TEAM: CONFIG.SQUADS[0],
            SEASON: '2025/26',
            WHATSAPP_ENABLED: CONFIG.FEATURES.whatsappIntegration,
            DEBUG_MODE: CONFIG.DEBUG_MODE
        };
    }
    
    // Add utility functions for new pages only
    if (typeof window.checkConfig === 'undefined') {
        window.checkConfig = function() {
            if (!CONFIG.WEB_APP_URL || CONFIG.WEB_APP_URL === 'YOUR_URL_HERE') {
                console.error('❌ WEB_APP_URL not configured in config.js');
                return false;
            }
            
            console.log('✅ Configuration loaded successfully');
            console.log('🔗 Google Apps Script URL:', CONFIG.WEB_APP_URL);
            return true;
        };
    }
    
    // Test connection function
    if (typeof window.testConnection === 'undefined') {
        window.testConnection = async function() {
            try {
                console.log('🧪 Testing connection to Google Apps Script...');
                const response = await fetch(`${CONFIG.WEB_APP_URL}?action=test`);
                const data = await response.json();
                console.log('✅ Connection test successful:', data);
                return true;
            } catch (error) {
                console.error('❌ Connection test failed:', error);
                return false;
            }
        };
    }
});
