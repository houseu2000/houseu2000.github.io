# Research page sources

Updated 2026-10-10. Detail pages are concise bilingual research explanations, not copies of the papers. Main-page CV summaries can cover a broader project than one publication.

## structural-response

- Publisher: https://www.sciencedirect.com/science/article/pii/S0888327025008246
- DOI: https://doi.org/10.1016/j.ymssp.2025.113123
- Full sources supplied by the author: `1-s2.0-S0888327025008246-main.pdf` and `manuscript-v3-revised-no_mark.docx`.
- Study 1 (published IKCF/SCIDMS): figures 1, 2, 4 and 7 extracted from the PDF, and Table 5 used for S1/S2/S3 x-direction metrics (0.472/0.510/0.661 mm RMSE, 0.977/0.968/0.939 CC). These metrics belong to the IKCF paper, now verified against the full text.
- Study 2 (revised learning-based manuscript): figures 1, 9, 11, 16 and 13 extracted from DOCX embedded media. Case 2/200-point comparisons use Table 4; fixed-100-point spatial selection uses Table 5. Synthetic rotation and occlusion must be identified as controlled transformations, not physical torsion tests.
- Study 2 is accepted by SCHM and in press, as confirmed by the author on 2026-10-10. The content is based on the supplied revised manuscript; no DOI is yet supplied. No full manuscript downloads are exposed.
- Figure assets are converted to WebP (up to 2400 px wide / 1800 px tall) and linked for full-size viewing. Each caption identifies its paper and figure number.
- Author-supplied `mmc4.mp4` and `mmc5.mp4` are Study 1 supplementary Videos 4 and 5 (Shandong and Gansu). Only the black sidebars are removed with a 356×720 crop at x=462; the original non-square pixel display ratio is normalized to 432×720 square pixels, and duration and audio are retained. Web copies use H.264, fast-start MP4 and local posters. Originals are unchanged.
- Real earthquake examples have no displacement ground truth and must not be presented as quantitative accuracy validation. Camera vibration can contribute to apparent motion; geometry and mounting are required to interpret it as structural response.

## disaster-video-agent

- Current basis: author-provided `SEES_中文初稿_插图更新版.pdf` (supplied with a URL-encoded Chinese filename), superseding the earlier problem/data revision.
- Submitted to SCIHM, as confirmed by the author on 2026-10-10. Preserve the author-supplied abbreviation; no acceptance, publication, journal expansion or DOI is inferred. This manuscript is separate from the SCHM in-press visual-measurement paper and is not counted among published papers.
- Pages 1–6: task definition, R97, video-level splits, Observer–Planner–Judge and frame budgets.
- Page 6, Table 3: three-run held-out metrics (65 videos, 390 episodes). Page 7, Table 4 is a separate matched-location experiment and must not be mixed with Table 3.
- Figures 1–5 added: framework raster extracted directly from page 3; vector charts rendered at 4× from cropped figure regions on pages 7, 8 and 9, preserving labels and axes. WebP images link to full size; website captions identify source figures. Framework frames are illustrative, not claimed as R97 samples.
- Pages 7–8: controlled video-agent comparisons are API-only reproductions, not official full-system benchmarks. Component ablations and candidate-depth selection use the development split, while temporal retrieval uses the first test run.
- Pages 8–9, Tables 6–7 / Fig. 5: Qwen3.7-Flash planner, judge-only and full-pipeline replacements. Full replacement BA 72.66%, F1 65.56% are single-run results, separate from Table 3 means. Model names are transcribed from the supplied manuscript.
- Pages 8–10: 11.76% measures covered video duration, not total inference cost reduction. Higher recall comes with increased false positives and reduced precision in the main configuration. Oracle-localization recall 79.43% uses 141 test positives and is not an overall accuracy metric.
- The manuscript PDF is not copied into the website or exposed as a download. Only the summarized content is used.

## rgbd-motion-reconstruction

- Full source supplied by the author: `1-s2.0-S2352710226022965-main.pdf`.
- Published title: *Depth vision-based indoor building behavior reconstruction in disaster scenarios: Integrating structural displacement and non-structural motion*. Journal of Building Engineering 132 (2026), 117474. DOI: https://doi.org/10.1016/j.jobe.2026.117474. Accepted 28 September 2026; available online 4 October 2026, verified from page 1.
- Figures 1, 3, 7, 10, 11, 12 and 15 extracted from the PDF and converted to WebP with full-size links. The full PDF is not exposed as a download.
- Table 2: nine simulated RGB-D sequences / 810 frames. Mean translation RMSE 0.028 m (FoundationPose) vs 0.260 m (MegaPose); rotation RMSE 3.25° vs 12.85°. Matched-input evaluation includes two large MegaPose errors. Camera 1 cabinet translation RMSE is 0.044 m, so do not claim all cases are below 4 cm.
- Section 4 / Fig. 10: floor displacement RMSE 1.078, 1.233 and 1.173 mm across three views. Scripted Blender motion is not validated earthquake physics.
- Sections 5–6: two scaled physical tests have no independent pose or displacement ground truth. Open3D reconstructs motion, and processing is approximately 6.5 fps against 30 fps capture; this is not real-time playback or a complete bidirectional digital twin.
- Author-supplied `mmc2.mp4` and `mmc3.mp4` are supplementary Videos 2 and 3. Both show a central physical view and two reconstructed views. Website copies preserve the entire 1280×320 frame and duration, remuxed without re-encoding to fast-start MP4. Original files are unchanged. Local posters are sampled at 3 seconds. There is no audio track.
- Publication archive and homepage now include this first-author paper; the previous major-revision item is replaced by its published status, taking the prior 15 published SCI papers / six lead-author papers to 16 / seven. The separate SCHM in-press paper remains separate.
