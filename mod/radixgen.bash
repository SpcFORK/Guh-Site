for file in mod/susha-radix/radix-icons/*.html; do
  base_name="${file%%.*}"
  mv "$file" "${base_name}.html"
done