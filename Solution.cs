
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly char ONE_EMPTY_SPACE_CHAR = ' ';

    public IList<string> PrintVertically(string s)
    {
        string[] input = s.Split(ONE_EMPTY_SPACE_CHAR);
        char[][] verticalFormat = CreateMatrixForVerticalFormat(input);
        ExtractInputIntoVerticalFormat(input, verticalFormat);

        return CreateListForVerticalFormat(verticalFormat);
    }

    private char[][] CreateMatrixForVerticalFormat(string[] input)
    {
        int rows = 0;
        int columns = input.Length;
        foreach (string current in input)
        {
            rows = Math.Max(rows, current.Length);
        }
        char[][] verticalFormat = new char[rows][];
        for (int r = 0; r < rows; ++r)
        {
            verticalFormat[r] = new char[columns];
        }
        return verticalFormat;
    }

    private void ExtractInputIntoVerticalFormat(string[] input, char[][] verticalFormat)
    {
        for (int column = 0; column < verticalFormat[0].Length; ++column)
        {
            for (int row = 0; row < verticalFormat.Length; ++row)
            {
                if (row < input[column].Length)
                {
                    verticalFormat[row][column] = input[column][row];
                    continue;
                }
                verticalFormat[row][column] = ONE_EMPTY_SPACE_CHAR;
            }
        }
    }

    private List<string> CreateListForVerticalFormat(char[][] verticalFormat)
    {
        List<string> listVerticalFormat = new List<string>();
        for (int row = 0; row < verticalFormat.Length; ++row)
        {
            int lastIndexOfNotEmptySpace = verticalFormat[row].Length - 1;
            while (lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] == ONE_EMPTY_SPACE_CHAR)
            {
                --lastIndexOfNotEmptySpace;
            }
            string current = new string(verticalFormat[row]).Substring(0, lastIndexOfNotEmptySpace + 1);
            listVerticalFormat.Add(current);
        }

        return listVerticalFormat;
    }
}
