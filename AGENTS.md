<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep DUOC prototype data and simulated session only in the shared React provider, never persisted, because the requested product is presentation-only.
- Use separate TanStack content routes with the shared Finance shell and module views, because all MVP screens must remain individually navigable.
- Define all visual roles in src/styles.css and reuse the original logo asset, because official identity must stay consistent across screens.
