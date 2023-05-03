console.log(`[${performance.now().toFixed(3)} ms]`, 'Running scripts in src/build');

// logging.ts must be import at the top
import './logging';

// Pack generator
import './manifest';
import './license';
import './pack_icon';
import './resource_pack';
import './behavior_pack';