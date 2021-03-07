require 'minitest/autorun'

class TestDisemvowel < Minitest::Test
  def disemvowel(str)
    str.gsub(/[aiueo]/i, '')
  end

  def test_disemvowel
    assert_equal('Ths wbst s fr lsrs LL!', disemvowel('This website is for losers LOL!'))
  end
end
