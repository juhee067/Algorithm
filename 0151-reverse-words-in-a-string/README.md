<h2><a href="https://leetcode.com/problems/reverse-words-in-a-string">151. Reverse Words in a String</a></h2><h3>Medium</h3><hr><p>Given an input string <code>s</code>, reverse the order of the <strong>words</strong>.</p>

<p>A <strong>word</strong> is defined as a sequence of non-space characters. The <strong>words</strong> in <code>s</code> will be separated by at least one space.</p>

<p>Return <em>a string of the words in reverse order concatenated by a single space.</em></p>

<p><b>Note</b> that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;the sky is blue&quot;
<strong>Output:</strong> &quot;blue is sky the&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;  hello world  &quot;
<strong>Output:</strong> &quot;world hello&quot;
<strong>Explanation:</strong> Your reversed string should not contain leading or trailing spaces.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a good   example&quot;
<strong>Output:</strong> &quot;example good a&quot;
<strong>Explanation:</strong> You need to reduce multiple spaces between two words to a single space in the reversed string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> contains English letters (upper-case and lower-case), digits, and spaces <code>&#39; &#39;</code>.</li>
	<li>There is <strong>at least one</strong> word in <code>s</code>.</li>
</ul>

<p>&nbsp;</p>
<p><b data-stringify-type="bold">Follow-up:&nbsp;</b>If the string data type is mutable in your language, can&nbsp;you solve it&nbsp;<b data-stringify-type="bold">in-place</b>&nbsp;with&nbsp;<code data-stringify-type="code">O(1)</code>&nbsp;extra space?</p>

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
