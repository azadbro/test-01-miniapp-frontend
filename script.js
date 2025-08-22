function watchAd() {
  alert("Ad watched successfully! +50 Coins 🎉");
}

function copyLink() {
  const link = document.getElementById("refLink");
  link.select();
  link.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(link.value);
  alert("Referral link copied!");
}
