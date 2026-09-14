class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> store(nums.begin(), nums.end());

        int res = 0;

        for (int num : store) {
            // Start only if num is the beginning of a sequence
            if (store.find(num - 1) == store.end()) {
                int curr = num;
                int streak = 0;

                while (store.find(curr) != store.end()) {
                    streak++;
                    curr++;
                }

                res = max(res, streak);
            }
        }

        return res;
    }
};