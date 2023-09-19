<h2><a href="https://leetcode.com/problems/merge-strings-alternately/">1768. Merge Strings Alternately</a></h2><h3>Easy</h3><hr><div><p>You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>

<p>Return <em>the merged string.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> word1 = "abc", word2 = "pqr"
<strong>Output:</strong> "apbqcr"
<strong>Explanation:</strong>&nbsp;The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> word1 = "ab", word2 = "pqrs"
<strong>Output:</strong> "apbqrs"
<strong>Explanation:</strong>&nbsp;Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> word1 = "abcd", word2 = "pq"
<strong>Output:</strong> "apbqcd"
<strong>Explanation:</strong>&nbsp;Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word1.length, word2.length &lt;= 100</code></li>
	<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>
</ul></div>

# Intuition
각각의 문자를 사이에 섞어 하나의 문자로 조합합니다.

# Approach
1. word1과 word2의 길이를 비교하여 새로 만들 문자의 최대 문자 길이를 정합니다.
2. 각각의 문자의 길이가 i보다 작아질 때까지 반복하며 newString에 문자를 추가해줍니다.
3. 모든 문자를 다 순회했다면, newString를 반환합니다.

# Complexity
- Time complexity:
 O(max(N, M))
여기서 N은 word1의 길이이고, M은 word2의 길이입니다. 반복문은 두 문자열 중 더 긴 문자열의 길이를 기준으로 돌기 때문에 최대 문자열의 길이에 비례하는 시간이 걸립니다.

- Space complexity:
추가적인 메모리 공간을 사용하지 않고 문자열을 조합하므로 입력 문자열과 동일한 크기의 공간만 필요합니다.
