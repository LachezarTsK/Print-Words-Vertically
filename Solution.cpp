
#include <string>
#include <vector>
#include <sstream>
using namespace std;

class Solution {

    inline static const char ONE_EMPTY_SPACE = ' ';

public:
    vector<string> printVertically(string s) const {
        vector<string> input = split(s, ONE_EMPTY_SPACE);
        vector<vector<char>> verticalFormat = createMatrixForVerticalFormat(input);
        extractInputIntoVerticalFormat(input, verticalFormat);

        return createListForVerticalFormat(verticalFormat);
    }

private:
    vector<string> split(string s, char delimiter) const {
        vector<string> input;
        stringstream strStream(s);
        string temp;

        while (getline(strStream, temp, delimiter)) {
            input.push_back(temp);
        }
        return input;
    }

    vector<vector<char>> createMatrixForVerticalFormat(const vector<string>& input) const {
        int rows = 0;
        int columns = input.size();
        for (const auto& current : input) {
            rows = max(rows, static_cast<int>(current.length()));
        }
        return vector<vector<char>>(rows, vector<char>(columns));
    }

    void extractInputIntoVerticalFormat(const vector<string>& input, vector<vector<char>>& verticalFormat) const {
        for (int column = 0; column < verticalFormat[0].size(); ++column) {
            for (int row = 0; row < verticalFormat.size(); ++row) {
                if (row < input[column].length()) {
                    verticalFormat[row][column] = input[column][row];
                    continue;
                }
                verticalFormat[row][column] = ONE_EMPTY_SPACE;
            }
        }
    }

    vector<string> createListForVerticalFormat(const vector<vector<char>>& verticalFormat) const {
        vector<string> listVerticalFormat;

        for (int row = 0; row < verticalFormat.size(); ++row) {
            int lastIndexOfNotEmptySpace = verticalFormat[row].size() - 1;
            while (lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] == ONE_EMPTY_SPACE) {
                --lastIndexOfNotEmptySpace;
            }
            string current = string(verticalFormat[row].begin(), verticalFormat[row].end()).substr(0, lastIndexOfNotEmptySpace + 1);
            listVerticalFormat.push_back(current);
        }

        return listVerticalFormat;
    }
};
