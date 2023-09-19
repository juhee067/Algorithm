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
이 코드의 목적은 문자열에서 단어의 순서를 뒤집는 것입니다.
이를 위해 주어진 문자열을 공백을 기준으로 분할하고,
분할된 단어들을 뒤집은 후 다시 조합합니다.
# Approach
주어진 문자열을 공백을 기준으로 분할하여 배열로 변환합니다.
빈 문자열을 제거하기 위해 배열을 필터링합니다.
필터링된 배열을 뒤집습니다.
뒤집힌 배열을 다시 공백으로 연결하여 최종 결과 문자열을 생성합니다.

# Complexity
- Time complexity:O(n) 

주어진 문자열의 길이에 선형 시간복잡도에 비례합니다.
문자열을 분할하고, 필터링하며, 뒤집는 각 단계는 선형 시간에 작동합니다.

- Space complexity:O(n) 

입력 문자열과 동일한 크기의 배열이 생성되므로,
공간 복잡도는 입력 문자열의 길이에 비례합니다.
