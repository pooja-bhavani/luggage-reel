say -v Samantha -r 145 -o public/audio/audio_1.m4a --data-format=aac "[[slnc 300]] Tired of luggage that holds you back? [[slnc 300]] Meet RARE. [[slnc 300]] The ultimate travel companion."
say -v Samantha -r 145 -o public/audio/audio_2.m4a --data-format=aac "[[slnc 200]] Crafted with an ultra-durable carbon-fibre shell, [[slnc 300]] it’s designed to take a beating, while looking absolutely flawless."
say -v Samantha -r 145 -o public/audio/audio_3.m4a --data-format=aac "[[slnc 200]] Move through the airport like a breeze. [[slnc 300]] Our 360-degree precision wheels guarantee a smooth, effortless glide."
say -v Samantha -r 145 -o public/audio/audio_4.m4a --data-format=aac "[[slnc 200]] Travel with total peace of mind. [[slnc 300]] Your valuables are fully protected by a premium, T.S.A.-approved locking system."
say -v Samantha -r 145 -o public/audio/audio_5.m4a --data-format=aac "[[slnc 200]] And inside? [[slnc 300]] It’s pure luxury. [[slnc 300]] Smart, spacious compartments make packing beautifully organized, and incredibly simple."
say -v Samantha -r 145 -o public/audio/audio_6.m4a --data-format=aac "[[slnc 200]] Available in Midnight Black, and Deep Sapphire. [[slnc 400]] Stop settling for less. [[slnc 300]] Upgrade to RARE today."

for i in {1..6}; do
  echo -n "audio_$i: "
  afinfo public/audio/audio_$i.m4a | grep "estimated duration" | awk '{print $3}'
done
