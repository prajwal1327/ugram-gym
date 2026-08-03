'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Upload,
  Trash2,
  Eye,
  EyeOff,
  CheckSquare,
  Square,
  Edit,
  X,
  Check,
  Image as ImageIcon,
  Tag,
} from 'lucide-react';

interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: string;
  isPublished: boolean;
  type: 'photo';
  createdAt: string;
}

const CATEGORIES = ['gym', 'transformation', 'event', 'members', 'equipment'];

const INITIAL_ITEMS: GalleryItem[] = [
  { id: '1', url: '', caption: 'Main gym floor with premium equipment', category: 'gym', isPublished: true, type: 'photo', createdAt: '2025-01-01' },
  { id: '2', url: '', caption: 'Cardio section', category: 'gym', isPublished: true, type: 'photo', createdAt: '2025-01-02' },
  { id: '3', url: '', caption: 'Member transformation — Rajesh -18kg', category: 'transformation', isPublished: true, type: 'photo', createdAt: '2025-01-03' },
  { id: '4', url: '', caption: 'New Year fitness event 2025', category: 'event', isPublished: true, type: 'photo', createdAt: '2025-01-05' },
  { id: '5', url: '', caption: 'Olympic barbell set', category: 'equipment', isPublished: false, type: 'photo', createdAt: '2025-01-06' },
  { id: '6', url: '', caption: 'Member group photo', category: 'members', isPublished: true, type: 'photo', createdAt: '2025-01-07' },
];

function GalleryCard({
  item,
  isSelected,
  onSelect,
  onTogglePublish,
  onDelete,
  onEditCaption,
  onAssignCategory,
}: {
  item: GalleryItem;
  isSelected: boolean;
  onSelect: () => void;
  onTogglePublish: () => void;
  onDelete: () => void;
  onEditCaption: (caption: string) => void;
  onAssignCategory: (cat: string) => void;
}) {
  const [editingCaption, setEditingCaption] = useState(false);
  const [captionDraft, setCaptionDraft] = useState(item.caption);
  const [showCatMenu, setShowCatMenu] = useState(false);

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border transition-all duration-200 ${
        isSelected ? 'border-[#C9A84C]' : 'border-white/6 hover:border-white/15'
      }`}
      style={{ background: '#111111' }}
    >
      {/* Image area */}
      <div
        className="relative w-full bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] flex items-center justify-center"
        style={{ aspectRatio: '1/1' }}
      >
        {item.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
        ) : (
          <ImageIcon size={32} className="text-white/10" />
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={onTogglePublish}
            className={`p-2 rounded-lg border transition-all ${item.isPublished ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' : 'bg-green-500/20 border-green-500/30 text-green-400'}`}
            title={item.isPublished ? 'Unpublish' : 'Publish'}
          >
            {item.isPublished ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 transition-all hover:bg-red-500/30"
            title="Delete"
          >
            <Trash2 size={15} />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowCatMenu(!showCatMenu)}
              className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 transition-all"
              title="Category"
            >
              <Tag size={15} />
            </button>
            {showCatMenu && (
              <div
                className="absolute top-full mt-1 left-0 z-20 rounded-xl overflow-hidden shadow-xl"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', minWidth: '120px' }}
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { onAssignCategory(cat); setShowCatMenu(false); }}
                    className={`w-full text-left px-3 py-2 text-xs capitalize transition-colors ${item.category === cat ? 'text-[#C9A84C] bg-[#C9A84C]/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Select checkbox */}
        <button
          onClick={onSelect}
          className="absolute top-2 left-2 transition-opacity"
          style={{ opacity: isSelected ? 1 : 0 }}
        >
          {isSelected ? (
            <CheckSquare size={18} className="text-[#C9A84C]" />
          ) : (
            <Square size={18} className="text-white/40" />
          )}
        </button>
        <button
          onClick={onSelect}
          className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ display: isSelected ? 'none' : 'block' }}
        >
          <Square size={18} className="text-white/60" />
        </button>

        {/* Published badge */}
        <div className="absolute top-2 right-2">
          <div
            className={`w-2 h-2 rounded-full ${item.isPublished ? 'bg-green-400' : 'bg-red-400'}`}
            title={item.isPublished ? 'Published' : 'Unpublished'}
          />
        </div>
      </div>

      {/* Caption */}
      <div className="p-3">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[#C9A84C] text-[10px] capitalize bg-[#C9A84C]/10 px-2 py-0.5 rounded-full">
            {item.category}
          </span>
          <button
            onClick={() => { setEditingCaption(true); setCaptionDraft(item.caption); }}
            className="p-1 text-white/30 hover:text-white/60 transition-colors"
          >
            <Edit size={12} />
          </button>
        </div>
        {editingCaption ? (
          <div className="flex gap-1 mt-1">
            <input
              type="text"
              value={captionDraft}
              onChange={(e) => setCaptionDraft(e.target.value)}
              className="flex-1 bg-white/5 border border-[#C9A84C]/30 rounded-lg px-2 py-1 text-white text-xs focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => { onEditCaption(captionDraft); setEditingCaption(false); }}
              className="p-1 text-green-400"
            >
              <Check size={14} />
            </button>
            <button
              onClick={() => setEditingCaption(false)}
              className="p-1 text-red-400"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">{item.caption}</p>
        )}
      </div>
    </div>
  );
}

// ---- Page ----

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(INITIAL_ITEMS);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newItems: GalleryItem[] = acceptedFiles.map((file) => ({
      id: Date.now().toString() + Math.random(),
      url: URL.createObjectURL(file),
      caption: file.name.replace(/\.[^/.]+$/, ''),
      category: 'gym',
      isPublished: false,
      type: 'photo' as const,
      createdAt: new Date().toISOString().split('T')[0],
    }));
    setItems((prev) => [...newItems, ...prev]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] },
    multiple: true,
  });

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    if (selected.size === filtered.length) setSelected(new Set());
    else setSelected(new Set(filtered.map((i) => i.id)));
  }

  function bulkDelete() {
    if (!confirm(`Delete ${selected.size} item(s)?`)) return;
    setItems((prev) => prev.filter((i) => !selected.has(i.id)));
    setSelected(new Set());
  }

  function bulkPublish(publish: boolean) {
    setItems((prev) => prev.map((i) => selected.has(i.id) ? { ...i, isPublished: publish } : i));
    setSelected(new Set());
  }

  function togglePublish(id: string) {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, isPublished: !i.isPublished } : i));
  }

  function deleteItem(id: string) {
    if (!confirm('Delete this image?')) return;
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function editCaption(id: string, caption: string) {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, caption } : i));
  }

  function assignCategory(id: string, cat: string) {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, category: cat } : i));
  }

  const filtered = items.filter((i) => {
    const matchCat = categoryFilter === 'all' || i.category === categoryFilter;
    const matchStatus = statusFilter === 'all' || (statusFilter === 'published' ? i.isPublished : !i.isPublished);
    return matchCat && matchStatus;
  });

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-white font-bold text-2xl">Gallery</h1>
          <p className="text-white/40 text-sm">{items.length} items · {items.filter((i) => i.isPublished).length} published</p>
        </div>
      </div>

      {/* Upload Zone */}
      <div
        {...getRootProps()}
        className={`rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all ${
          isDragActive
            ? 'border-[#C9A84C] bg-[#C9A84C]/5'
            : 'border-white/10 hover:border-[#C9A84C]/40 hover:bg-white/2'
        }`}
      >
        <input {...getInputProps()} />
        <Upload size={28} className={`mx-auto mb-3 ${isDragActive ? 'text-[#C9A84C]' : 'text-white/20'}`} />
        <p className="text-white/60 font-medium text-sm mb-1">
          {isDragActive ? 'Drop images here...' : 'Drag & drop images here'}
        </p>
        <p className="text-white/30 text-xs">or click to browse — JPG, PNG, WebP up to 5MB each</p>
      </div>

      {/* Filters + Bulk actions */}
      <div
        className="p-3 rounded-2xl flex flex-wrap items-center gap-3"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <button
          onClick={selectAll}
          className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
        >
          {selected.size === filtered.length && filtered.length > 0 ? (
            <CheckSquare size={16} className="text-[#C9A84C]" />
          ) : (
            <Square size={16} />
          )}
          <span className="text-xs">{selected.size > 0 ? `${selected.size} selected` : 'Select all'}</span>
        </button>

        {selected.size > 0 && (
          <>
            <div className="w-px h-5 bg-white/10" />
            <button
              onClick={() => bulkPublish(true)}
              className="flex items-center gap-1.5 text-green-400 text-xs bg-green-500/10 border border-green-500/15 px-3 py-1.5 rounded-lg hover:bg-green-500/20 transition-colors"
            >
              <Eye size={13} /> Publish
            </button>
            <button
              onClick={() => bulkPublish(false)}
              className="flex items-center gap-1.5 text-yellow-400 text-xs bg-yellow-500/10 border border-yellow-500/15 px-3 py-1.5 rounded-lg hover:bg-yellow-500/20 transition-colors"
            >
              <EyeOff size={13} /> Unpublish
            </button>
            <button
              onClick={bulkDelete}
              className="flex items-center gap-1.5 text-red-400 text-xs bg-red-500/10 border border-red-500/15 px-3 py-1.5 rounded-lg hover:bg-red-500/20 transition-colors"
            >
              <Trash2 size={13} /> Delete
            </button>
          </>
        )}

        <div className="ml-auto flex gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-white/5 border border-white/8 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer appearance-none"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="capitalize">{c}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white/5 border border-white/8 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer appearance-none"
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          className="rounded-2xl p-12 text-center"
          style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.08)' }}
        >
          <ImageIcon size={32} className="text-white/20 mx-auto mb-3" />
          <p className="text-white/40 text-sm">No images here. Upload to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              isSelected={selected.has(item.id)}
              onSelect={() => toggleSelect(item.id)}
              onTogglePublish={() => togglePublish(item.id)}
              onDelete={() => deleteItem(item.id)}
              onEditCaption={(caption) => editCaption(item.id, caption)}
              onAssignCategory={(cat) => assignCategory(item.id, cat)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
