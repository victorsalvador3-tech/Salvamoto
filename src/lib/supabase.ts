import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eaghjshpdxixhfrmfnes.supabase.co';
const supabaseKey = 'sb_publishable_OYvwM3Xc0CrlZGGPe_mKvA_V3g2YYwL';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;